// components/ThemeProvider.tsx
"use client";

import React from "react";

// ThemeProvider is no longer active — the site uses a single dark navy theme.
// Kept as a stub so any remaining imports resolve without errors.

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContext.Provider value={{ theme: "dark", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    // Return safe defaults instead of throwing
    return { theme: "dark" as Theme, toggleTheme: () => {} };
  }
  return context;
}