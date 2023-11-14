/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        colors: {
            blue: "#262E4D",
            blue1: "#3c6cd2",
            black: "#000000",
            white: "#FFFFFF",
            grey: "#444444",
            grey1: "#bebebe", // borders
            grey2: "#f7f6f7", // sections
            transparent: "transparent", // used for bg
        },
    },
    plugins: [],
};
