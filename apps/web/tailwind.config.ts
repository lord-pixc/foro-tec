import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./app/**/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "foro-blue": "#1e3a8a",
        "foro-blue-light": "#3b82f6",
        "foro-gray": "#64748b",
        "foro-gray-light": "#e2e8f0"
      }
    }
  },
  plugins: []
};

export default config;
