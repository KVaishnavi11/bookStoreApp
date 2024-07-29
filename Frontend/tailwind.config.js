import daisyui from 'daisyui';

// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to match your project's structure
  ],
   darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],

  daisyui: {
    themes: ["light"],  //set the default theme to light
  }

}
