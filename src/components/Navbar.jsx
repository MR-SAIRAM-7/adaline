import React from 'react';

const Navbar = () => {
    return (
        <nav className=" mt-4 w-full px-12 py-10 flex justify-between items-center bg-transparent z-50 font-sans">
            {/* Left: Nav Links */}
            <div className="flex space-x-10">
                <a href="#" className="leading-none text-[11px] font-bold tracking-[0.15em] text-[#1a1a1a] uppercase flex items-end gap-1 hover:opacity-70 transition-opacity mt-10" >
                    Products
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-[1px]"><path d="m6 9 6 6 6-6" /></svg>
                </a>
                <a href="#" className="leading-none text-[11px] font-bold tracking-[0.15em] text-[#1a1a1a] uppercase hover:opacity-70 transition-opacity">Pricing</a>
                <a href="#" className="leading-none text-[11px] font-bold tracking-[0.15em] text-[#1a1a1a] uppercase hover:opacity-70 transition-opacity">Blog</a>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                {/* Stylized Feather Icon - Custom Path to match "pen nib/feather" look more closely */}
                <div className="text-[#1a1a1a] transform -rotate-12">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.41 5.41l-2.83-2.83c-.39-.39-1.02-.39-1.41 0L3.17 16.59c-.39.39-.39 1.02 0 1.41l2.83 2.83c.39.39 1.02.39 1.41 0L21.41 6.83c.39-.39.39-1.02 0-1.41zM5.91 18.09L4.5 16.68 17.09 4.09l1.41 1.41L5.91 18.09z" />
                        {/* Adding a solid fill part to make it look like the logo icon */}
                        <path d="M14.5 6.5L17.5 9.5L19 8L16 5L14.5 6.5Z" fill="currentColor" />
                    </svg>
                </div>
                <span className="text-4xl font-normal tracking-tight text-[#1a1a1a]" style={{ fontFamily: 'Times New Roman, serif' }}>Adaline</span>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center space-x-6">
                <button className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#f4f2e9] text-[10px] font-extrabold tracking-[0.15em] text-[#1a1a1a] hover:bg-[#e6e4dc] transition-all">
                    WATCH DEMO
                    <div className="w-5 h-5 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-[#1a1a1a] ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                </button>
                <button className="px-8 py-3.5 rounded-full bg-[#1A2E1A] text-[10px] font-extrabold tracking-[0.15em] text-white hover:bg-[#142314] transition-all shadow-sm">
                    START FOR FREE
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
