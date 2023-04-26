/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        '2xl': '0px 4px 4px rgba(223, 223, 223, 0.13)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'green_gradient': 'linear-gradient(98.86deg, #000000 0%, #47BFA3 94.22%)',
        'blue_gradient': 'radial-gradient(239.22% 377.32% at -32.48% 148.89%, rgba(0, 0, 0, 0.42) 0%, rgba(241, 236, 236, 0.58125) 0.01%, rgba(90, 90, 90, 0) 100%), linear-gradient(248.62deg, #212121 34.44%, rgba(142, 142, 142, 0) 94.43%)',
        'green': '#47BFA3',
        'gray': '#1D2939',
        'deep_blue': '#101828',
        'light_gray': '#F4F3FF',
        'light_green': '#ECFDF3',
        'gray25': '#FAFBFD',
        'gray-200': '#F9FAFB',
        'gray-600': '#475467',
        'gray-800': '#1D2939',
      },
      
    },
  },
  plugins: [],
}


