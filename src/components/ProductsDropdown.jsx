export default function ProductsDropdown() {
    const products = [
        {
            id: 'iterate',
            number: 1,
            label: 'ITERATE',
            heading: ['Sketch, test', 'and refine'],
            links: [
                { name: 'Editor', href: '/editor' },
                { name: 'Playground', href: '/playground' },
                { name: 'Datasets', href: '/datasets' },
            ],
            active: true,
        },
        {
            id: 'evaluate',
            number: 2,
            label: 'EVALUATE',
            heading: ['Reflect', 'and measure'],
            links: [
                { name: 'Evaluations', href: '/evaluations' },
                { name: 'Datasets', href: '/datasets' },
            ],
            active: true,
        },
        {
            id: 'deploy',
            number: 3,
            label: 'DEPLOY',
            heading: ['From draft', 'to live'],
            links: [
                { name: 'Deployments', href: '/deployments' },
                { name: 'Analytics', href: '/analytics' },
                { name: 'Gateway', href: 'https://gateway.adaline.ai', external: true },
            ],
            active: true,
        },
        {
            id: 'monitor',
            number: 4,
            label: 'MONITOR',
            heading: ['Insights', 'in real time'],
            links: [
                { name: 'Logs', href: '/logs' },
                { name: 'Analytics', href: '/analytics' },
            ],
            active: true,
        },
    ];

    // SVG Icon Components for each product category
    const IterateIcon = () => (
        <div className="relative w-full h-full">
            {/* Shape 1 - Top left */}
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[0%] left-[20%] h-[50%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 18.764 9.036 4.634 20.304-12.985 16.283H21.587L8.602 37.341l4.634-20.305z" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 15.427 5.615 8.208 14.217L52.785 44 40.209 54.553H23.79L11.215 44l-2.85-16.168 8.208-14.217z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            {/* Shape 2 - Top right small */}
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[5%] left-[75%] h-[20%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 18.764 9.036 4.634 20.304-12.985 16.283H21.587L8.602 37.341l4.634-20.305z" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 15.427 5.615 8.208 14.217L52.785 44 40.209 54.553H23.79L11.215 44l-2.85-16.168 8.208-14.217z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            {/* Shape 3 - Left middle */}
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[35%] left-[0%] h-[35%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 18.764 9.036 4.634 20.304-12.985 16.283H21.587L8.602 37.341l4.634-20.305z" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 15.427 5.615 8.208 14.217L52.785 44 40.209 54.553H23.79L11.215 44l-2.85-16.168 8.208-14.217z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            {/* Shape 4 - Center large */}
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[35%] left-[25%] h-[65%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 18.764 9.036 4.634 20.304-12.985 16.283H21.587L8.602 37.341l4.634-20.305z" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="m32 8 15.427 5.615 8.208 14.217L52.785 44 40.209 54.553H23.79L11.215 44l-2.85-16.168 8.208-14.217z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );

    const EvaluateIcon = () => (
        <div className="relative w-full h-full">
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[37%] left-[0%] h-[50%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[0%] left-[20%] h-[55%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[35%] left-[75%] h-[20%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[60%] left-[35%] h-[40%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );

    const DeployIcon = () => (
        <div className="relative w-full h-full">
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[40%] left-[0%] h-[60%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[0%] left-[45%] h-[25%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[25%] left-[60%] h-[40%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[75%] left-[65%] h-[20%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d="M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );

    const MonitorIcon = () => (
        <div className="relative w-full h-full">
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[0%] left-[0%] h-[65%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[0%] left-[70%] h-[25%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[72%] left-[10%] h-[28%] product-icon-shape">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
            <div className="flex aspect-square shrink-0 items-center justify-center absolute top-[55%] left-[55%] h-[45%] product-icon-shape product-icon-shape-reverse">
                <div className="absolute -inset-1/6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="absolute -inset-[calc(5%+12px)]">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" className="absolute inset-0" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );

    const getIcon = (id) => {
        switch (id) {
            case 'iterate': return <IterateIcon />;
            case 'evaluate': return <EvaluateIcon />;
            case 'deploy': return <DeployIcon />;
            case 'monitor': return <MonitorIcon />;
            default: return null;
        }
    };

    return (
        <div className="products-dropdown w-full bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Icons Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 pt-6 lg:pt-10 pb-4 lg:pb-6">
                    {products.map((product) => (
                        <a key={product.id} href={`/${product.id}`} className="col-span-1 block group">
                            <div className={`product-icon-wrapper flex items-center gap-3 min-h-[140px] w-full transition-colors duration-300 ${product.active ? 'text-gray-900' : 'text-[#c4c4c4]'}`}>
                                {/* SVG Icons Container */}
                                <div className="shrink-0 w-[100px] h-[100px]">
                                    {getIcon(product.id)}
                                </div>
                                {/* Number Badge and Label - positioned to the right of icons */}
                                <div className="flex items-center gap-2">
                                    <div className={`atlas-web-sm flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold transition-colors duration-300 ${product.active ? 'bg-[#7BA23F] group-hover:bg-[#2D5016] text-white' : 'bg-[#e8e8e8] text-[#999]'}`}>
                                        {product.number}
                                    </div>
                                    <div className={`atlas-web-mono transition-colors duration-300 ${product.active ? 'text-gray-900' : 'text-[#999]'}`}>{product.label}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Content Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 py-6 lg:py-8">
                    {products.map((product) => (
                        <div key={product.id} className="col-span-1">
                            {/* Section Title */}
                            <div className={`product-section-title mb-3 ${product.active ? 'text-[#7BA23F]' : 'text-[#999]'}`}>
                                {product.label}
                            </div>

                            {/* Heading */}
                            <h3 className="product-section-heading text-gray-900 mb-5">
                                {product.heading.map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        {i < product.heading.length - 1 && <br />}
                                    </span>
                                ))}
                            </h3>

                            {/* Links */}
                            <div className="space-y-1.5">
                                {product.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="product-link block hover:text-[#7BA23F] transition-colors"
                                        {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                    >
                                        {link.name}
                                        {link.external && (
                                            <span className="ml-0.5 text-xs">↗</span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
