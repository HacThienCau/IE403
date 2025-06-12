import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; 

export default function ThemeToggleButton() {
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    }, [darkMode]);
  
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"
        title="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-blue-600" />
        )}
      </button>
    );
  }