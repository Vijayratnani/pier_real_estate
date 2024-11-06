const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
          wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 10s ease-out infinite',
        bounce : 'bounceOnce 1s ease forwards',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        voiletCustom: "#325098",
        voiletCustom2: "#332D4F",
        pinkCustom: "#FBD0E1",
        pinkCustom2: "#ECE9F7",
        grayCustom: "#8CA8BE",
        grayCustom2: "#464646",
        blackCustom: "#444853",
        yellowCustom: "#FFCE31",
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
