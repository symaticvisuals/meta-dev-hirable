module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
      serif: ["Merriweather", "sans-serif"],
    },
    extend: {
      colors: {
        base: "var(--color-icon-main)",
      },
      textColor: {
        main: "var(--color-text-main)",
        "main-muted": "var(--color-text-main-muted)",
        active: "var(--color-text-active)",
        green: "var(--color-text-green)",
        'active-dark': 'var(--color-text-active-dark)',
        fb: "var(--color-social-fb)",
        linkedin: "var(--color-social-linkedin)",
        google: "var(--color-social-google)",
        apple: "var(--color-social-apple)",
        github: "var(--color-social-github)",
        
      },
      backgroundColor: {
        main: "var(--color-bg-main)",
        "main-hover": "var(--color-bg-main-hover)",
      },
    },
  },
  plugins: [],
};
