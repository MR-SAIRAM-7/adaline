import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const uiContentRef = useRef(null);
  const navbarRef = useRef(null);
  const heroRef = useRef(null);
  const scrollVideoContainerRef = useRef(null);
  const scrollVideoRef = useRef(null);

  const [images, setImages] = useState([]);
  const [isScrollVideoVisible, setIsScrollVideoVisible] = useState(false);
  const totalFrames = 281;
  const scrollDistance = 5000; 


  useEffect(() => {
    const loadedImages = [];

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const paddedNumber = String(i).padStart(3, '0');
      img.src = `/sequence/graded4K100gm5010803${paddedNumber}.jpg`;
      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);


  useEffect(() => {

    if (images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");


    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);


    const frameState = { frame: 0 };

    // Function to render the image corresponding to the current frame index
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const currentImage = images[frameState.frame];

      if (currentImage && currentImage.complete && currentImage.naturalWidth > 0) {
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


  useEffect(() => {
    const navbar = navbarRef.current;
    const hero = heroRef.current;
    if (!navbar || !hero) return;

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

  // Scroll-triggered video animation
  useEffect(() => {
    const videoContainer = scrollVideoContainerRef.current;
    const video = scrollVideoRef.current;
    if (!videoContainer || !video) return;


    gsap.set(videoContainer, {
      xPercent: -50,
      yPercent: -50,
      scale: 3,
      opacity: 0,
      transformOrigin: 'center center',
    });

    // Video entrance animation - shrinks from all sides to center
    const videoAnimation = gsap.to(videoContainer, {
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: `top+=${scrollDistance * 0.9} top`,
        end: `+=${scrollDistance * 0.1}`,
        scrub: 0.5,
        onEnter: () => {
          setIsScrollVideoVisible(true);
          video.play().catch(() => {
          });
        },
        onLeaveBack: () => {
          setIsScrollVideoVisible(false);
          video.pause();
          video.currentTime = 0;
        },
      },
    });

    return () => {
      if (videoAnimation) videoAnimation.kill();
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

      {/* Scroll-triggered Video Player */}
      <div
        ref={scrollVideoContainerRef}
        className="scroll-video-container"
        style={{ pointerEvents: isScrollVideoVisible ? 'auto' : 'none' }}
      >
        <video
          ref={scrollVideoRef}
          className="scroll-video-player"
          playsInline
          muted
          loop
          controls
          style={{ pointerEvents: isScrollVideoVisible ? 'auto' : 'none' }}
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default App;
