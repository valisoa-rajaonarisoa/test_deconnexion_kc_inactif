/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 0.5s ease-out", // Animation fade-in
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      rotate: {
        "y-180": "180deg", // Rotation Y à 180°
        "y-360": "360deg", // Rotation Y à 360°
      },
      perspective: {
        none: "none", // Aucune perspective
        DEFAULT: "1000px", // Perspective par défaut à 1000px
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px", // Définir l'utilitaire perspective
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)", // Ajouter la rotation Y à 180°
        },
      });
    },
  ],
};
