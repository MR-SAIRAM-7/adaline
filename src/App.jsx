import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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

  // preload Images
  useEffect(() => {
    const loadImages = async () => {
      const promises = [];
      const imageObjects = [];

      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
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

  //  Setup ScrollTrigger and Canvas Rendering
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
      render();
    };

    const render = () => {
      const frameIndex = Math.round(frameRef.current.current);
      const img = images[frameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
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
        scrub: 0.5,
      },
      onUpdate: render,
    });

    // Fade out UI content
    const uiFade = gsap.to(".ui-content", {
      opacity: 0,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "30% top",
        scrub: true,
      }
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      animation.kill();
      uiFade.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isLoading]);

  if (isLoading) {
    const progress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
    return (
      <></>
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

      <div className="ui-content fixed top-0 left-0 w-full h-full z-10 pointer-events-none">
        <div className="w-full h-full pointer-events-auto">
          <Navbar />
          <div className="flex flex-col h-full pointer-events-none">
            {/* Hero should generally allow text selection but let's prevent blocks 
                     if it fades out. Content can be interactive if needed. 
                     For now, let's make it interactive until it fades.
                 */}
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
