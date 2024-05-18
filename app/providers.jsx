// app/providers.jsx

"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <div>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
}

