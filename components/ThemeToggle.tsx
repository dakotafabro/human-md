"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";
const order: Theme[] = ["system", "light", "dark"];

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && order.includes(saved)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(saved);
      apply(saved);
    }
  }, []);

  function next() {
    const value = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(value);
    apply(value);
    if (value === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", value);
  }

  return (
    <button type="button" className="theme" onClick={next} aria-label={`Theme: ${theme}. Change theme`}>
      Theme: {theme}
    </button>
  );
}
