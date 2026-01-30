export default function Hero() {
    return (
        <section className="w-full flex flex-col items-center pt-12 pb-8 px-6">
            {/* Main Headline */}
            <h1 className="hero-heading font-bold text-3xl md:text-4xl lg:text-[2.5rem] leading-tight text-center text-gray-900 max-w-3xl">
                The single platform to iterate,
                <br />
                evaluate, deploy, and monitor AI agents
            </h1>


            {/* Trusted By Section */}
            <div className="mt-12 flex flex-col items-center">
                <span className="text-xs tracking-[0.2em] text-gray-500 mb-6">
                    TRUSTED BY
                </span>

                <div className="flex items-center gap-8 flex-wrap justify-center">
                    {/* Salesforce */}
                    <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                        </svg>
                        <span className="text-sm font-medium">salesforce</span>
                    </div>

                    {/* Reforge */}
                    <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                        <span className="text-sm font-semibold">Reforge</span>
                    </div>

                    {/* McKinsey & Company */}
                    <div className="flex flex-col items-center text-gray-700 leading-none">
                        <span className="text-sm font-medium">McKinsey</span>
                        <span className="text-xs">&amp; Company</span>
                    </div>

                    {/* Daybreak */}
                    <div className="flex items-center gap-1 text-gray-700">
                        <span className="text-sm font-medium">Daybreak</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z" />
                        </svg>
                    </div>

                    {/* STATFLO */}
                    <div className="flex items-center gap-1 text-gray-700">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
                        </svg>
                        <span className="text-sm font-semibold tracking-wide">STATFLO</span>
                    </div>

                    {/* DOORS */}
                    <div className="flex items-center gap-1 text-gray-700">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <span className="text-sm font-semibold tracking-wide">DOORS</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
