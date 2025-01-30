import type { Config } from 'tailwindcss'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                pageBackground: 'var(--page-background)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            animationDelay: {
                1500: '1500ms',
                1800: '1800ms',
                2100: '2100ms',
                2400: '2400ms',
                2700: '2700ms',
                3000: '3000ms',
                3300: '3300ms',
                3600: '3600ms',
                3900: '3900ms',
                4200: '4200ms',
                4500: '4500ms',
                4800: '4800ms',
            },
        },
    },
    plugins: [require('tailwindcss-animation-delay')],
} satisfies Config
