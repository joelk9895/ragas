"use client";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => {
        setTheme(currentTheme === "light" ? "dark" : "light");
      }}
      className="z-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      {currentTheme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
