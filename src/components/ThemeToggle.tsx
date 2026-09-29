"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isScrolled?: boolean;
}

export function ThemeToggle({ isScrolled = true }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
      className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 cursor-pointer shadow-2xs ${
        !isScrolled
          ? "border-white/25 bg-black/35 text-white backdrop-blur-xs hover:border-[#D5B1A0] hover:text-[#D5B1A0]"
          : "border-gray-200 bg-white text-[#18191C] hover:border-[#D5B1A0] hover:text-[#D5B1A0] dark:border-white/15 dark:bg-[#1C1E23] dark:text-white"
      }`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon
          className={`w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12 ${
            !isScrolled ? "text-white" : "text-[#18191C]"
          }`}
        />
      )}
    </button>
  );
}