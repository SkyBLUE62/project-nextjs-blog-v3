import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'spartan': ['League Spartan', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'active': '#D4A373',
        'primary': '#E5E5E5',
        'secondary': '#6C757D',
        'icon': '#F8F9FA',
        'social-icons': '#E5E5E5',
        'white' : '#FFF',
        'title': '#495057'
      },
      
      backgroundColor: {
        'header-color-slider': 'rgba(0, 0, 0, 0.2)',
        'header': 'rgba(0, 0, 0, 1)',
        'category': 'rgba(255, 255, 255, 0.15)',
        'footer' : '#212529'
      },
      maxWidth: {
        '10xl': '90rem',
      },
      height: {
        '4.75xl' : '37.5rem',
        'card':'35.313rem'
      },
      width: {
        '4.33xl':'33.125rem',
        'card':'19.375rem',
      },
      zIndex: {
        '100': '100',
        '99': '99',
        '98': '98',
        '97': '97',
      },
      backgroundImage: {
        'nav-responsive': 'url("/assets/images/homeBg1.png")',
        'skew-responsive': 'url("/assets/images/homeBg2.png")',
        'header-image': 'url("/assets/images/homeBg1.png")',
      },
      borderColor: {
        'nav': '#D4A373'
      },
      margin: {
        '17.5': '70px',
      }     
    },
  },
  plugins: [],
}
export default config
