/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  darkMode: 'media', // or 'class' if you're using manual toggle
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-slower": "ping 6s cubic-bezier(0, 0, 0.2, 1) infinite",
        "ping-slowest": "ping 8s cubic-bezier(0, 0, 0.2, 1) infinite",
        "floatAndRotate": "floatRotate 10s ease-in-out infinite",
        "pulse-slow": "pulse 8s ease-in-out infinite",
      },
      keyframes: {
        floatRotate: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(1.5deg)" },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
};
