/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--orbitron)'],
      secondary: ['var(--rajdhani)'],
      tertiary: ['var(--aldrich)'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#38bdf8',
      },
      backgroundImage: {
        about: "url('../../public/assets/me.png')",
        services: "url('../../public/assets/laptop.png')",
      },
    },
  },
  plugins: [],
}
