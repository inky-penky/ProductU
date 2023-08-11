/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{ 
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        'black' : '#000000', 
        'white' : '#ffffff',
        'darkblue' : '#1565c0',
        'cyanblue': '#00bcd4',
        'slate' : '#e2e8f0',
        'indigo1' : '#7986CB',
        'indigo2' : '#9FA8DA'
      }, 
      backgroundImage:{
        'bg-pricing': "url('../public/vectors/images/hand.webp')"
      },
    },
  },
  plugins: [],
}

