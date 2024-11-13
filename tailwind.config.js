/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            primary: "#FF6464",
            secondary: "#00A8CC",
            light: "#EDF7FA",
            grey: "#8695A4",
            dark: "#21243D",
            white: "#FFFFFF",
            black: "#000000",
            "red-500": "#ef4444",
        },
    },
    plugins: [],
};
