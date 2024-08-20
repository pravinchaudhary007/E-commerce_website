/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backimage': "url('/src/assets/back-skill.jpg')",
        'footer':"url('/src/assets/footer.jpg')",
        'neture':"url('/src/assets/about.jpg')",
        'login':"url('/src/assets/login.jpg')",
        'contact':"url('/src/assets/contect.jpg')",
        'register':"url('/src/assets/register.jpg')"
      },
    },
  },
  plugins: [],
}

