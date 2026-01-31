export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xs': '340px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                meadow: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#6b8f23',
                    800: '#166534',
                    900: '#14532d',
                },
                pebble: {
                    50: '#fafafa',
                    100: '#f5f5f4',
                    200: '#e7e5e4',
                    300: '#a8a29e',
                    400: '#78716c',
                    500: '#57534e',
                    600: '#44403c',
                    700: '#292524',
                    800: '#1c1917',
                    900: '#0c0a09',
                },
            },
        },
    },
    plugins: [],
}
