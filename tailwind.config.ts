import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
} satisfies Config;
