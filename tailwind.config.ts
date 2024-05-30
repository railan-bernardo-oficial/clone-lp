import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-header": "linear-gradient(177deg, #000000 0%, rgba(4, 4, 4, 0.95) 0%, rgba(84, 84, 84, 0) 100%)",
        "gradient-custom-green": "linear-gradient(to right, #e0ea68 0%, #91c553 52%, #7cbb4d 66%, #48a240 100%);",
      },
      textColor: {
        "custom-green": "#48a240"
      },
      height: {
        "custom-banner": "585px",
        "custom-carousel": "565px",
        "custom-item": "289px",
        "custom-item-md": "145.36px",
      },
      screens: {
        "xs": "475px",
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
};
export default config;
