import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 281;
const PREFIX = "graded4K100gm5010803";

function App() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);
  const imagesRef = useRef([]);
  const frameRef = useRef({ current: 0 });

  // 1. Preload Images
  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      const imageObjects = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        // Correct zero-padding: '3001' seems to be the suffix pattern from the file list?
        // Check previous observation: 
        // ...3001.jpg -> i=1. 3000 + 1?
        // ...3100.jpg -> i=100. 3000 + 100?
        // Yes, it acts like an offset of 3000? 
        // Wait, the file list is `graded4K100gm5010803` + `001`.
        // `graded4K100gm5010803` + `001` -> `...3001`.
        // `graded4K100gm5010803` + `100` -> `...3100`.
        // So it is PREFIX + padStart(3, '0').
        const paddedIndex = String(i).padStart(3, "0");
        const src = `/sequence/${PREFIX}${paddedIndex}.jpg`;

        const promise = new Promise((resolve) => {
          img.onload = () => {
            setLoadedCount((prev) => prev + 1);
            resolve(img);
          };
          img.onerror = (e) => {
            console.error(`Failed to load image: ${src}`, e);
            resolve(null);
          };
        });

        img.src = src;
        imageObjects.push(img);
        promises.push(promise);
      }

      imagesRef.current = imageObjects;
      await Promise.all(promises);
      setIsLoading(false);
    };

    loadImages();
  }, []);

  // 2. Setup ScrollTrigger and Canvas Rendering
  useEffect(() => {
    if (isLoading) return;
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const images = imagesRef.current;

    // Sizing function for object-fit: cover
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(); // Re-render on resize
    };

    const render = () => {
      const frameIndex = Math.round(frameRef.current.current);
      const img = images[frameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        // Draw Image - Object Fit: Cover Logic
        const w = canvas.width;
        const h = canvas.height;
        const imgW = img.width;
        const imgH = img.height;

        const scale = Math.max(w / imgW, h / imgH);
        const x = (w - (imgW * scale)) / 2;
        const y = (h - (imgH * scale)) / 2;

        context.clearRect(0, 0, w, h);
        context.drawImage(img, x, y, imgW * scale, imgH * scale);
      }
    };

    // Initial Resize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // GSAP Animation
    const animation = gsap.to(frameRef.current, {
      current: TOTAL_FRAMES - 1,
      snap: "current",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // slightly smooth scrubbing
      },
      onUpdate: render,
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      animation.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoading]);

  if (isLoading) {
    const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
    return (
      <>
      </>
    );
  }

  return (
    <div ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover'
        }}
      />

    </div>
  );
}

export default App;
