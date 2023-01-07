/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        freshonion: {
          30: '#8DC559',
          50: '#83BF4A',
          100: '#78B540',
          200: '#6EA63A',
          300: '#649735',
          400: '#5B8930',
          500: '#50792A',
          600: '#466A25',
          700: '#3C5B20',
          800: '#324B1B',
          900: '#283C15',
        },
        firebrick: { 
          30: '#E57676',
          50: '#E26565',
          100: '#DE5454',
          200: '#DB4343',
          300: '#D83131',
          400: '#CE2727',
          500: '#B22222',
          600: '#AB2121',
          700: '#9A1D1D',
          800: '#891A1A',
          900: '#781717',
          1000: '#671414',
          1100: '#561010',
          1200: '#450D0D',
          1300: '#330A0A',
          1400: '#220707'
        },
        paper: {
          50: '#FAF7F0',
          100: '#F5F0E0',
          200: '#F0E8D1',
          300: '#E8DCB8',
          400: '#E6D9B2',
          500: '#DCCA93',
          600: '#D7C284',
          700: '#D2BB74',
          800: '#CDB365',
          900: '#C8AB56',
          1000: '#C3A446',
          1100: '#B99A3C'
        },
        "dark-paper": {
          50: '#DCD9D2',
          100: '#D7D2C2',
          200: '#D2CAB3',
          300: '#CABE9A',
          400: '#C8BB95',
          500: '#BEAC75',
          600: '#B9A466',
          700: '#B49D56',
          800: '#AF9547',
          900: '#AA8D38',
          1000: '#A58628',
          1100: '#7D7C1E'
        },
        'warm-gray': {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917'
        }
      }
    },
  },
  plugins: [],
}
