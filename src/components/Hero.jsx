import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
    // Top margin increased to mt-48 to account for taller navbar
    return (
        <div className="flex flex-col items-center justify-center mt-48 text-center px-4">
            <h1 className="text-6xl md:text-7xl font-medium text-[#1a1a1a] max-w-5xl leading-[1.1] tracking-tight font-sans">
                The single platform to iterate, evaluate, deploy, and monitor AI agents
            </h1>

            <div className="mt-28 flex flex-col items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">
                    Trusted By
                </span>

                <div className="flex items-center gap-12 opacity-70 grayscale transition-all hover:grayscale-0">
                    {/* Text Placeholders for Logos as requested to look clean without actual assets */}
                    <span className="text-xl font-bold text-gray-600 flex items-center gap-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 1.54C13.29-.69 7.03 2 4.1 6.88 4.09 6.89 4 7 4.14 7.09c4.27 2.44 5.3 6.94 2.85 10.95-.36.6-.76 1.17-1.18 1.73-.23.29-.07.72.29.77 5.75-1.92 12.39.29 14.89 5.39.02.04.09.02.09-.02.4-7.5-3.32-15.01-11.45-19.46 2.05-2.02 5.38-2.6 8.01-4.91zm-7.61 14.24c-1.39 1.19-3.4 1.4-5.01.62-.27-.13-.53-.29-.78-.45-.44-.29-.39-1 .13-1.16 2.11-.64 4.06-2.04 5.4-3.95 2.19 1.47 1.83 3.61.26 4.94z" /></svg>
                        salesforce
                    </span>
                    <span className="text-xl font-bold text-gray-600 flex items-center gap-1">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                        Discord
                    </span>
                    <span className="text-xl font-bold text-gray-600">Daybreak</span>
                    <span className="text-xl font-bold text-gray-600 flex items-center gap-1">
                        <div className="w-5 h-5 bg-gray-600 rounded-sm"></div> Coframe
                    </span>
                    <span className="text-xl font-bold text-gray-600 flex items-center gap-1">
                        DOORDASH
                    </span>
                    <span className="text-xl font-bold text-gray-600">
                        ▲ Jusbrasil
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
