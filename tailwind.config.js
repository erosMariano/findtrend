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
      colors: {
        primary: "#A8FF35",
        green2: "#87D322",
        buttonHover: "#8CC83A",
        black2: "#2B2B2B",
        black3: "#181818",
        gray1: "#8B8B8B",
        gray2: "#ADADAD",
        gray3: "#F5F5F5",
        gray4: "#F1F1F1"
      }
    },
  },
  plugins: [],
}