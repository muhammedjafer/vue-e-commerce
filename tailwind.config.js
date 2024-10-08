/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                segoe: ["Poppins", "sans-serif"],
            },
            fontSize: {
                "6.5xl": [
                    "4rem",
                    {
                        lineHeight: "1",
                    },
                ],
            },
            maxWidth: {
                "68": "17rem",
            },
            width: {
                "17": "4.25rem",
            },
            padding: {
                "68": "17rem",
            },
            margin: {
                "26": "6.5rem",
            },
            right: {
                "68": "17rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
