/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        colors: {
            blue: "#262E4D",
            blue1: "#3c6cd2",
            black: "#000000",
            white: "#FFFFFF",
            grey: "#666666",
            grey1: "#B9B9B9",
            grey2: "#ECEEF3", // sections
            grey3: "#F7F8FF", // used for bg
            transparent: "transparent", // used for bg
        },
        fontFamily: {
            body: ["Outfit", "sans-serif"],
        },
    },
    plugins: [],
};
