import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundColor: {
        'hulu-green': '#1DBF73',
        'netflix-grey': '#141414',
      },
    },
  },
  plugins: [],
} satisfies Config;
