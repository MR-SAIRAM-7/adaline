import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import gsap from 'gsap';

export default function MobileMenu({ isOpen, onClose, onWatchDemo }) {
    const overlayRef = useRef(null);
    const panelRef = useRef(null);

    const products = [
        {
            id: 'iterate',
            label: 'Iterate',
            description: 'Sketch, test and refine',
            icon: (
                <svg viewBox="0 0 64 64" className="w-10 h-10 mobile-icon-rotate" strokeWidth="1" fill="none" stroke="currentColor">
                    <circle cx="32" cy="32" r="20" vectorEffect="non-scaling-stroke" />
                </svg>
            ),
        },
        {
            id: 'evaluate',
            label: 'Evaluate',
            description: 'Reflect and measure',
            icon: (
                <svg viewBox="0 0 64 64" className="w-10 h-10 mobile-icon-rotate-reverse" strokeWidth="1" fill="none" stroke="currentColor">
                    <circle cx="32" cy="32" r="20" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                </svg>
            ),
        },
        {
            id: 'deploy',
            label: 'Deploy',
            description: 'From draft to live',
            icon: (
                <svg viewBox="0 0 64 64" className="w-10 h-10 mobile-icon-rotate" strokeWidth="1" fill="none" stroke="currentColor">
                    <path d="M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z" vectorEffect="non-scaling-stroke" />
                </svg>
            ),
        },
        {
            id: 'monitor',
            label: 'Monitor',
            description: 'Insights in real time',
            icon: (
                <svg viewBox="0 0 64 64" className="w-10 h-10 mobile-icon-rotate-reverse" strokeWidth="1" fill="none" stroke="currentColor">
                    <circle cx="32" cy="32" r="20" vectorEffect="non-scaling-stroke" />
                    <circle cx="32" cy="32" r="24" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                </svg>
            ),
        },
    ];

    useEffect(() => {
        if (!isOpen) return;

        const overlay = overlayRef.current;
        const panel = panelRef.current;

        // Initial state - dropdown from top
        gsap.set(overlay, { opacity: 0 });
        gsap.set(panel, { y: '-100%' });

        // Animate in - slide down from top 
        const tl = gsap.timeline();
        tl.to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
        })
            .to(panel, {
                y: '0%',
                duration: 0.5,
                ease: 'expo.out',
            }, '-=0.2');

        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
            tl.kill();
        };
    }, [isOpen]);

    const handleClose = () => {
        const overlay = overlayRef.current;
        const panel = panelRef.current;

        const tl = gsap.timeline({
            onComplete: onClose,
        });

        tl.to(panel, {
            y: '-100%',
            duration: 0.35,
            ease: 'power2.in',
        })
            .to(overlay, {
                opacity: 0,
                duration: 0.2,
            }, '-=0.15');
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="mobile-menu-wrapper fixed inset-0 z-[100]">
            {/* Overlay backdrop */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                onClick={handleClose}
            />

            {/* Menu panel - dropdown from top */}
            <div
                ref={panelRef}
                className="mobile-menu-panel absolute top-0 left-0 right-0 w-full bg-white shadow-xl overflow-y-auto max-h-[90vh]"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200/50">
                    {/* Logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 84 15" className="text-gray-900 h-4">
                        <path d="M9.15.003.451 12.124v1.733h1.74l8.698-6.928V.003zM10.89 11.777H8.801v2.078h2.087z" />
                    </svg>

                    {/* CTA and Close */}
                    <div className="flex items-center gap-2 xs:gap-3">
                        <button className="start-for-free-btn px-2.5 xs:px-4 py-2 xs:py-2.5 bg-[#2D5016] text-white rounded-full text-[10px] xs:text-xs font-medium tracking-wider hover:bg-[#234012] transition-colors whitespace-nowrap">
                            <span className="hidden xs:inline">START FOR FREE</span>
                            <span className="xs:hidden">START FREE</span>
                        </button>
                        <button
                            onClick={handleClose}
                            className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Products Section */}
                <div className="px-5 pt-6 pb-4">
                    <div className="mb-1">
                        <h2 className="text-xl font-semibold text-gray-900">Products</h2>
                        <p className="text-sm text-gray-500 mt-0.5">Across your journey</p>
                    </div>

                    {/* Product Items */}
                    <div className="mt-5 space-y-1">
                        {products.map((product) => (
                            <a
                                key={product.id}
                                href={`/${product.id}`}
                                className="mobile-product-item flex items-center justify-between py-4 border-b border-gray-200/60 group"
                                onClick={handleClose}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-gray-700 group-hover:text-[#2D5016] transition-colors">
                                        {product.icon}
                                    </div>
                                    <div>
                                        <div className="text-base font-medium text-gray-900 group-hover:text-[#2D5016] transition-colors">
                                            {product.label}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {product.description}
                                        </div>
                                    </div>
                                </div>
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#2D5016] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Other Links */}
                <div className="px-5 py-4 space-y-4">
                    <a
                        href="#pricing"
                        className="block text-xl font-semibold text-gray-900 hover:text-[#2D5016] transition-colors"
                        onClick={handleClose}
                    >
                        Pricing
                    </a>
                    <a
                        href="#blog"
                        className="block text-xl font-semibold text-gray-900 hover:text-[#2D5016] transition-colors"
                        onClick={handleClose}
                    >
                        Blog
                    </a>
                </div>

                {onWatchDemo && (
                    <div className="px-5 py-6 mt-4 border-t border-gray-200/50">
                        <button
                            onClick={() => {
                                handleClose();
                                setTimeout(onWatchDemo, 400);
                            }}
                            className="flex items-center gap-2 text-gray-700 hover:text-[#2D5016] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-sm font-medium tracking-wide">WATCH DEMO</span>
                        </button>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
}
