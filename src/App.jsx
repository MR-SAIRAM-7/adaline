import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  // Reference to the container and canvas DOM nodes
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const uiContentRef = useRef(null);
  const navbarRef = useRef(null);
  const heroRef = useRef(null);

  // State to store preloaded image frames
  const [images, setImages] = useState([]);

  // Total number of frames in the sequence
  const totalFrames = 281;

  // 1. Preload Images
  // This useEffect runs once on load to create image elements for all frames
  useEffect(() => {
    const loadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      // Zero-pad the frame number to match the filename format (001, 002, etc.)
      const paddedNumber = String(i).padStart(3, '0');
      img.src = `/sequence/graded4K100gm5010803${paddedNumber}.jpg`;
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  // 2. Setup Canvas and Animation
  // This is the primary logic that links scroll positions to frame changes
  useEffect(() => {
    // Ensure images are loaded before running animation logic
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");

    // Handle window resize for responsive canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Object to track the current frame index (starts at 0)
    const frameState = { frame: 0 };

    // Function to render the image corresponding to the current frame index
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const currentImage = images[frameState.frame];

      if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
        // Calculate aspect ratio to cover the canvas
        const imgAspect = currentImage.naturalWidth / currentImage.naturalHeight;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth, drawHeight, drawX, drawY;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          drawX = 0;
          drawY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          drawX = (canvas.width - drawWidth) / 2;
          drawY = 0;
        }

        context.drawImage(currentImage, drawX, drawY, drawWidth, drawHeight);
      }
    };

    // Wait for first image to load before initial render
    if (images[0]) {
      images[0].onload = render;
      if (images[0].complete) render();
    }

    // GSAP Animation - animate frame index based on scroll
    const animation = gsap.to(frameState, {
      frame: totalFrames - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=5000",
        scrub: 0.5,
        pin: true,
        onUpdate: render,
      },
    });

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animation) animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [images]);

  // 3. UI Content Scroll Animation
  useEffect(() => {
    const navbar = navbarRef.current;
    const hero = heroRef.current;
    if (!navbar || !hero) return;

    // Hero: shrink and fade FIRST (starts immediately when scrolling begins)
    const heroAnimation = gsap.to(hero, {
      scale: 0.85,
      opacity: 0,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1000",
        scrub: 1,
      },
    });

    // Navbar: fade out with DELAY (starts after 500px of scrolling)
    const navbarAnimation = gsap.to(navbar, {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=500 top",
        end: "+=600",
        scrub: 0.8,
      },
    });

    return () => {
      if (heroAnimation) heroAnimation.kill();
      if (navbarAnimation) navbarAnimation.kill();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // display: 'block',
        }}
      />

      <div
        ref={uiContentRef}
        className="ui-content"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          pointerEvents: 'auto'
        }}
      >
        <div ref={navbarRef}>
          <Navbar />
        </div>
        <div ref={heroRef} className="hero-wrapper">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default App;
