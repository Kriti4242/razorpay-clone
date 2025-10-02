module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
      mullish:["Mulish","sans-serif"],
    },
  colors:{
    deepBlue:"#02042a",
    lightBlue: "#87cefa",
    lightBlue300: "#4b94ed",
    lightBlue500: "#0b72e7",
    greenLight: "#61cea6",
    grayText:"#818597",
    lightGray:"#e2e2e2",
    grayBlue:"#344a6c",
    deepBlueHead:"#162f56",
    gray2:"#525a76",
  },
   keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        updown: 'upDown 1s ease-in-out infinite',
      },
    },
  },  
  plugins: [],
}


