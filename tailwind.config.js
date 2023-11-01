/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            purple: "#6100FF",
            darkGrey: '#323232',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
        },
        extend: {},
    },
    plugins: [],
});

