import { useState, useRef, useCallback } from 'react';
import ProductsDropdown from './ProductsDropdown';
import VideoModal from './VideoModal';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [productsOpen, setProductsOpen] = useState(false);
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const watchDemoButtonRef = useRef(null);
    const closeTimeoutRef = useRef(null);

    // Clear any pending close timeout
    const clearCloseTimeout = useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    }, []);

    // Open dropdown immediately
    const handleMouseEnter = useCallback(() => {
        clearCloseTimeout();
        setProductsOpen(true);
    }, [clearCloseTimeout]);

    // Close dropdown with delay to allow mouse to move to dropdown
    const handleMouseLeave = useCallback(() => {
        clearCloseTimeout();
        closeTimeoutRef.current = setTimeout(() => {
            setProductsOpen(false);
        }, 150);
    }, [clearCloseTimeout]);

    // Toggle for click/touch support
    const handleProductsClick = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setProductsOpen(prev => !prev);
    }, []);

    const handleWatchDemoClick = () => {
        setVideoModalOpen(true);
    };

    const handleVideoModalClose = () => {
        setVideoModalOpen(false);
    };

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <div
                className="relative"
                onMouseLeave={handleMouseLeave}
            >
                <nav className="w-full px-4 md:px-6 py-4 flex items-center justify-between relative z-20">
                    {/* Left - Navigation Links (Desktop only) */}
                    <div className="hidden md:flex items-center gap-8">
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                        >
                            <button
                                onClick={handleProductsClick}
                                className="flex items-center gap-1 text-xs font-medium tracking-widest text-gray-800 hover:text-gray-600 transition-colors">
                                PRODUCTS
                                <svg
                                    className={`w-3 h-3 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                        <a href="#pricing" className="text-xs font-medium tracking-widest text-gray-800 hover:text-gray-600 transition-colors">
                            PRICING
                        </a>
                        <a href="#blog" className="text-xs font-medium tracking-widest text-gray-800 hover:text-gray-600 transition-colors">
                            BLOG
                        </a>
                    </div>

                    {/* Mobile - Logo (Left side) */}
                    <div className="flex md:hidden items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 84 15" className="text-meadow-900 h-5">
                            <path d="M9.15.003.451 12.124v1.733h1.74l8.698-6.928V.003zM10.89 11.777H8.801v2.078h2.087zM39.034.67v5.113h-.036C38.52 5.034 37.472 4.5 36.301 4.5c-2.413 0-4.099 1.906-4.099 4.81 0 2.601 1.562 4.775 4.135 4.775 1.029 0 2.218-.517 2.697-1.425h.035l.089 1.193h1.349V.67zM36.46 12.73c-1.739 0-2.715-1.497-2.715-3.439 0-1.977.976-3.474 2.715-3.474 1.757 0 2.59 1.515 2.59 3.474 0 1.925-.887 3.439-2.59 3.439m13.396-.196V7.742c0-.516-.088-1.015-.283-1.443-.409-.98-1.491-1.8-3.248-1.8-1.916 0-3.584 1.052-3.655 2.887h1.473c.089-1.122 1.1-1.639 2.182-1.639 1.225 0 2.023.606 2.023 1.853v.66l-2.821.195c-2.395.16-3.265 1.568-3.265 2.94 0 1.265.976 2.69 3.159 2.69 1.348 0 2.43-.588 2.98-1.497h.036l.16 1.265h2.218v-1.318zm-1.508-2.53c0 1.586-1.082 2.762-2.697 2.762-1.295 0-1.828-.73-1.828-1.515 0-1.122.994-1.568 1.988-1.639l2.537-.178zM70.263 4.5c-1.1 0-2.414.57-2.857 1.621h-.036l-.106-1.39h-1.33v9.122h1.525v-4.24c0-.766.035-1.657.337-2.334.408-.82 1.189-1.39 2.094-1.39C71.31 5.89 72 6.78 72 8.189v5.665h1.509V7.974c0-2.174-1.225-3.474-3.248-3.474m13.236 5.22c0-.018.036-.25.036-.57 0-2.459-1.384-4.65-4.117-4.65-2.715 0-4.258 2.298-4.258 4.828 0 2.298 1.366 4.757 4.223 4.757 2.058 0 3.637-1.23 3.921-2.975h-1.526c-.302 1.104-1.136 1.621-2.342 1.621-1.721 0-2.715-1.514-2.715-2.922V9.72zM79.4 5.8c1.668 0 2.467 1.283 2.502 2.637h-5.128C76.81 7.101 77.857 5.8 79.4 5.8m-23.74 6.735V.669h-3.301v1.265h1.74v10.601h-1.882v1.318h5.359v-1.318zm6.813 0V4.732h-3.282V6.05h1.72v6.485H58.96v1.318h5.483v-1.318zM64.407.669h-1.934v1.907h1.934zM26.134 8.847l.107-.16h2.714V3.128L21.361 13.89h-1.916v-.036L28.885.67h1.738v13.22h-1.668V9.987h-2.82z" />
                        </svg>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 84 15" className="text-meadow-900 h-6"><path d="M9.15.003.451 12.124v1.733h1.74l8.698-6.928V.003zM10.89 11.777H8.801v2.078h2.087zM39.034.67v5.113h-.036C38.52 5.034 37.472 4.5 36.301 4.5c-2.413 0-4.099 1.906-4.099 4.81 0 2.601 1.562 4.775 4.135 4.775 1.029 0 2.218-.517 2.697-1.425h.035l.089 1.193h1.349V.67zM36.46 12.73c-1.739 0-2.715-1.497-2.715-3.439 0-1.977.976-3.474 2.715-3.474 1.757 0 2.59 1.515 2.59 3.474 0 1.925-.887 3.439-2.59 3.439m13.396-.196V7.742c0-.516-.088-1.015-.283-1.443-.409-.98-1.491-1.8-3.248-1.8-1.916 0-3.584 1.052-3.655 2.887h1.473c.089-1.122 1.1-1.639 2.182-1.639 1.225 0 2.023.606 2.023 1.853v.66l-2.821.195c-2.395.16-3.265 1.568-3.265 2.94 0 1.265.976 2.69 3.159 2.69 1.348 0 2.43-.588 2.98-1.497h.036l.16 1.265h2.218v-1.318zm-1.508-2.53c0 1.586-1.082 2.762-2.697 2.762-1.295 0-1.828-.73-1.828-1.515 0-1.122.994-1.568 1.988-1.639l2.537-.178zM70.263 4.5c-1.1 0-2.414.57-2.857 1.621h-.036l-.106-1.39h-1.33v9.122h1.525v-4.24c0-.766.035-1.657.337-2.334.408-.82 1.189-1.39 2.094-1.39C71.31 5.89 72 6.78 72 8.189v5.665h1.509V7.974c0-2.174-1.225-3.474-3.248-3.474m13.236 5.22c0-.018.036-.25.036-.57 0-2.459-1.384-4.65-4.117-4.65-2.715 0-4.258 2.298-4.258 4.828 0 2.298 1.366 4.757 4.223 4.757 2.058 0 3.637-1.23 3.921-2.975h-1.526c-.302 1.104-1.136 1.621-2.342 1.621-1.721 0-2.715-1.514-2.715-2.922V9.72zM79.4 5.8c1.668 0 2.467 1.283 2.502 2.637h-5.128C76.81 7.101 77.857 5.8 79.4 5.8m-23.74 6.735V.669h-3.301v1.265h1.74v10.601h-1.882v1.318h5.359v-1.318zm6.813 0V4.732h-3.282V6.05h1.72v6.485H58.96v1.318h5.483v-1.318zM64.407.669h-1.934v1.907h1.934zM26.134 8.847l.107-.16h2.714V3.128L21.361 13.89h-1.916v-.036L28.885.67h1.738v13.22h-1.668V9.987h-2.82z" /></svg>
                    </div>

                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Watch Demo - Desktop only */}
                        <button
                            ref={watchDemoButtonRef}
                            onClick={handleWatchDemoClick}
                            className="hidden md:flex items-center gap-2 px-4 py-3 border cursor-pointer border-gray-300 rounded-full text-xs font-medium tracking-wider text-gray-800 hover:bg-gray-100 transition-colors"
                        >
                            WATCH DEMO
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                        {/* Start For Free Button - Responsive for all sizes */}
                        <button className="start-for-free-btn px-2.5 xs:px-4 py-2 xs:py-2.5 md:px-5 md:py-3 bg-[#2D5016] text-white rounded-full cursor-pointer text-[10px] xs:text-xs font-medium tracking-wider hover:bg-[#234012] transition-colors whitespace-nowrap">
                            <span className="hidden xs:inline">START FOR FREE</span>
                            <span className="xs:hidden">START FREE</span>
                        </button>

                        {/* Hamburger Menu - Mobile only */}
                        <button
                            onClick={handleMobileMenuOpen}
                            className="flex md:hidden p-2 text-gray-800 hover:text-gray-600 transition-colors"
                            aria-label="Open menu"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Products Dropdown - Desktop only */}
                {productsOpen && (
                    <div
                        className="absolute top-full left-0 w-full z-10 hidden md:block"
                        onMouseEnter={handleMouseEnter}
                    >
                        <ProductsDropdown />
                    </div>
                )}
            </div>

            {/* Video Modal */}
            <VideoModal
                isOpen={videoModalOpen}
                onClose={handleVideoModalClose}
                buttonRef={watchDemoButtonRef}
            />

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={handleMobileMenuClose}
                onWatchDemo={handleWatchDemoClick}
            />
        </>
    );
}
