module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "theme-blue": "#659dbd",
                "theme-brown": "#daad86",
                "theme-brown-dark": "#bc986a",
                "theme-yellow": "#fbeec1",
                "theme-greenish": "#8d8741",
            },
        },
        fontFamily: {
            blaka: ["Blaka", "cursive"],
            kanit: ["Kanit", "sans-serif"],
        },
    },
    plugins: [],
};
