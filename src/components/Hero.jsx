import React from 'react';

// 1. We extract the SVG to keep the code clean. 
// I've set the color to "text-black" here.
const SalesforceLogo = () => (
    <div className="flex items-center gap-2 text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="104" height="26" fill="currentColor">
            <path d="M94.3 13.876h5.72c-.161-1.583-1.08-2.638-2.802-2.638-1.608 0-2.619 1.032-2.917 2.638m2.918 6.811c-3.491 0-5.283-2.568-5.283-5.71s2.067-5.711 5.328-5.711 5.076 2.523 5.076 5.412c0 .344-.022.826-.068 1.032h-8.039c.115 1.766 1.103 3.005 2.87 3.005 1.448 0 2.32-.665 2.688-1.95h2.343c-.528 2.317-2.09 3.922-4.915 3.922m-17.73-5.802c0-3.303 2.02-5.62 5.006-5.62 2.044 0 3.376 1.193 3.881 2.799.023.069.092.069.092 0V9.449h2.16v9.679c0 3.44-1.907 5.756-5.697 5.756-2.94 0-4.8-1.49-5.075-3.692h2.342c.184.917.873 1.72 2.78 1.72 2.411 0 3.444-1.514 3.49-3.715l.023-1.4c0-.068-.069-.068-.092 0-.528 1.675-2.02 2.707-3.904 2.707-2.986 0-5.007-2.317-5.007-5.62m8.703 0c0-2.11-1.262-3.647-3.215-3.647-2.182 0-3.192 1.537-3.192 3.647s1.01 3.646 3.192 3.646c1.953 0 3.215-1.56 3.215-3.646M73.08 9.449h2.044l-.023 2.615c0 .069.07.069.092 0 .575-1.652 1.31-2.798 3.881-2.798v2.178c-2.916-.091-3.789 1.537-3.789 3.83v5.253H73.08zm-9.876 5.528c0 2.11 1.034 3.738 3.078 3.738s3.078-1.628 3.078-3.738-1.034-3.739-3.078-3.739-3.078 1.629-3.078 3.739m8.498 0c0 3.165-2.044 5.71-5.42 5.71s-5.42-2.546-5.42-5.71 2.044-5.711 5.42-5.711 5.42 2.546 5.42 5.71m-16.49 5.55v-9.174h-1.7V9.449h1.746v-.275c0-2.66 1.47-4.243 5.236-4.06v2.088c-2.342-.23-3.077.596-3.077 2.247h3.077v1.904h-3.077v9.174zm-10.357-6.651h5.719c-.16-1.583-1.08-2.638-2.802-2.638-1.608 0-2.618 1.032-2.917 2.638m2.917 6.811c-3.491 0-5.282-2.568-5.282-5.71s2.067-5.711 5.328-5.711 5.076 2.523 5.076 5.412c0 .344-.023.826-.07 1.032h-8.038c.115 1.766 1.103 3.005 2.871 3.005 1.447 0 2.32-.665 2.687-1.95h2.343c-.528 2.317-2.09 3.922-4.915 3.922M32.314 12.89h3.17c2.25 0 3.514-.963 3.514-2.82 0-1.675-.92-2.638-3.354-2.638h-3.33zm-2.366 7.638V5.413h5.627c4.066 0 5.788 1.743 5.788 4.426 0 1.995-1.263 3.899-4.387 4.037-.069 0-.069.091 0 .091 3.239.367 4.938 3.142 4.938 6.56h-2.48c0-3.028-1.332-5.62-4.57-5.62h-2.55v5.62zM4.94 5.244c-.059-.024-.044-.11.019-.113 1.53-.09 3.071.024 3.984.223 1.62.353 3.078.984 4.083 2.527.432.663.746 1.394.845 2.144a.08.08 0 0 1-.08.092H8.316a.08.08 0 0 1-.08-.075C8.118 8.286 7.167 6.174 4.94 5.244M19.253 20.38c.058.024.044.109-.019.112-1.53.09-3.072-.024-3.984-.223-1.62-.353-3.078-.984-4.083-2.527-.432-.663-.746-1.393-.845-2.144a.08.08 0 0 1 .08-.092h5.475a.08.08 0 0 1 .081.076c.117 1.755 1.068 3.867 3.295 4.797M7.879 10.634c.034-.049-.016-.111-.07-.09-1.32.536-7.058 3.254-5.884 6.946 1.032 3.216 6.514 3.08 7.78 3.006.062-.004.076-.09.018-.113-2.263-.943-3.21-3.104-3.303-4.864-.067-1.274.265-3.223 1.459-4.885M16.327 14.989c-.035.048.015.111.07.089 1.319-.535 7.057-3.253 5.884-6.945-1.032-3.216-6.515-3.081-7.78-3.006-.062.004-.077.088-.019.113 2.264.942 3.21 3.104 3.304 4.863.067 1.274-.265 3.224-1.46 4.886"></path>
        </svg>
    </div>
);

export default function Hero() {
    // We create an array to simulate having multiple logos
    const logos = Array(5).fill(null);

    return (
        <section className="w-full flex flex-col items-center pt-12 pb-8 px-6">

            {/* Inline styles for the smooth animation */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-scroll {
                    animation: scroll 25s linear infinite;
                }
            `}</style>

            {/* Main Headline */}
            <h1 className="hero-heading font-bold text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-center text-gray-900 max-w-3xl">
                The single platform to iterate,
                <br />
                evaluate, deploy, and monitor AI agents
            </h1>

            {/* Trusted By Section */}
            {/* Change max-w-[90vw] to max-w-4xl (or 3xl/5xl) */}
            <div className="mt-12 flex flex-col items-center w-full max-w-4xl overflow-hidden">
                <span className="text-xs tracking-[0.2em] text-gray-500 mb-6">
                    TRUSTED BY
                </span>

                {/* 1. mask-image adds a fade effect on left/right edges 
                  2. We render TWO groups of logos. One follows the other to create the infinite loop.
                */}
                <div
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    {/* First Group */}
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll">
                        {logos.map((_, i) => (
                            <li key={i}>
                                <SalesforceLogo />
                            </li>
                        ))}
                    </ul>

                    {/* Second Group (Duplicate for Loop) */}
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-scroll" aria-hidden="true">
                        {logos.map((_, i) => (
                            <li key={`duplicate-${i}`}>
                                <SalesforceLogo />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}