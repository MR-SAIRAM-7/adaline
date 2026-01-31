import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

export default function VideoModal({ isOpen, onClose, buttonRef }) {
    const modalRef = useRef(null);
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (!isOpen || !buttonRef?.current || !containerRef.current) return;

        const button = buttonRef.current;
        const container = containerRef.current;
        const modal = modalRef.current;

        const buttonRect = button.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;
        const offsetX = buttonCenterX - screenCenterX;
        const offsetY = buttonCenterY - screenCenterY;

        // Set initial state - positioned at button, tiny scale
        gsap.set(container, {
            scale: 0.05,
            x: offsetX,
            y: offsetY,
            opacity: 0,
            transformOrigin: 'center center',
        });

        gsap.set(modal, {
            opacity: 0,
        });

        // Animate effect - emerge from button with smooth linear animation
        const tl = gsap.timeline();

        tl.to(modal, {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
        })
            .to(container, {
                scale: 1,
                x: 0,
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.inOut',
            }, '-=0.3')
            .add(() => {
                // Auto-play video after animation completes
                if (videoRef.current) {
                    videoRef.current.play().catch(() => {
                    });
                }
            });

        return () => {
            tl.kill();
        };
    }, [isOpen, buttonRef]);

    const handleClose = () => {
        if (!buttonRef?.current || !containerRef.current) {
            onClose();
            return;
        }

        const button = buttonRef.current;
        const container = containerRef.current;
        const modal = modalRef.current;

        // Pause video
        if (videoRef.current) {
            videoRef.current.pause();
        }

        // Get button position for reverse animation
        const buttonRect = button.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        const screenCenterX = window.innerWidth / 2;
        const screenCenterY = window.innerHeight / 2;
        const offsetX = buttonCenterX - screenCenterX;
        const offsetY = buttonCenterY - screenCenterY;

        
        const tl = gsap.timeline({
            onComplete: onClose,
        });

        tl.to(container, {
            scale: 0.05,
            x: offsetX,
            y: offsetY,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut',
        })
            .to(modal, {
                opacity: 0,
                duration: 0.2,
            }, '-=0.2');
    };

    if (!isOpen) return null;

    return createPortal(
        <div
            ref={modalRef}
            className="video-modal-overlay"
            onClick={handleClose}
        >
            <div
                ref={containerRef}
                className="video-modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    className="video-modal-close"
                    onClick={handleClose}
                    aria-label="Close video"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {/* Video player */}
                <video
                    ref={videoRef}
                    className="video-modal-player"
                    controls
                    playsInline
                >
                    <source src="/videos/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>,
        document.body
    );
}
