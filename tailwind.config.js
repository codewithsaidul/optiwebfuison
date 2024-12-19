/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D5D9B",
        secondary: "#75C2F6",
        text: "#343a40",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      }, 
      backgroundImage: {
        'banner-image': "url('/img/banner.png')",
      },

      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },  // Starting and ending position
          '50%': { transform: 'translateY(-20px)' },  // Middle position (moves up)
        },
        rotateUp: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        upDown: 'upDown 10s ease-in-out infinite',  // Animation duration and looping
        rotateUp: 'rotateUp 20s ease-in-out infinite',  // Animation duration and looping
      },
      
    },
   
  },
  plugins: [],
}