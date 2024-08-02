"use client";

import React, { createContext, useState } from "react";

const ThemeContext = createContext();
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("");
  const handleThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
