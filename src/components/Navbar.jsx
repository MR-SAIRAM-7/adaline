import { useState } from 'react';

export default function Navbar() {
    const [productsOpen, setProductsOpen] = useState(false);

    return (
        <nav className="w-full px-6 py-4 flex items-center justify-between">
            {/* Left - Navigation Links */}
            <div className="flex items-center gap-8">
                <div 
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                >
                    <button className="flex items-center gap-1 text-xs font-medium tracking-widest text-gray-800 hover:text-gray-600 transition-colors">
                        PRODUCTS
                        <svg 
                            className={`w-3 h-3 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
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

            {/* Center - Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM16 8l-2-2M2 22l4-4" 
                        stroke="#1a1a1a" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
                <span className="text-2xl font-normal text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                    Adaline
                </span>
            </div>

            {/* Right - CTA Buttons */}
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-xs font-medium tracking-wider text-gray-800 hover:bg-gray-100 transition-colors">
                    WATCH DEMO
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </button>
                <button className="px-5 py-2 bg-[#2D5016] text-white rounded-full text-xs font-medium tracking-wider hover:bg-[#234012] transition-colors">
                    START FOR FREE
                </button>
            </div>
        </nav>
    );
}