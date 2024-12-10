import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      "primary-body": "#041f31",
      "primary-one": "#00f9a5",
      "primary-two": "#109594",
      "primary-three": "#1836b2",
      "primary-white": "#eef0f2",
      "primary-grey": "#525252",
      "secondary-one": "#BDEBEA",
    },
    container: {
		center: true,
		padding: "15px"
	},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1200px",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #00F5A0, #00D9F5)",
      },
      colors: {},
	  fontFamily: {
		sans: ['Poppins', ...defaultTheme.fontFamily.sans]
	  }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
