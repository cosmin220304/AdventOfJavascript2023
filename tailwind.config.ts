import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#235264",
          backgroundPrimary: "#964643",
        },
      },
      {
        themeName: "dark",
        colorScheme: "light",
        colors: {
          primary: "#235264",
          backgroundPrimary: "#964643",
        },
      },
    ],
  },
} satisfies Config;
