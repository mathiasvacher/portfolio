import { useEffect, useState } from "react";

const storageKey = "portfolio-theme-preference";
type Theme = "dark" | "light";

const getDefaultTheme = (): Theme => {
  const hour = new Date().getHours();

  if (hour >= 22 || hour < 7) return "dark";

  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    } catch {
      // Utilise les préférences de l'appareil si le stockage est indisponible.
    }

    return getDefaultTheme();
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Le choix reste actif tant que la page est ouverte.
    }

    setTheme(nextTheme);
  };

  const isLight = theme === "light";

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Activer le thème sombre" : "Activer le thème clair"}
      title={isLight ? "Activer le thème sombre" : "Activer le thème clair"}
    >
      <span aria-hidden="true">{isLight ? "☀︎" : "☾"}</span>
    </button>
  );
}

export default ThemeToggle;
