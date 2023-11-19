"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/components/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <div
        className={`${theme}`}
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    );
  }
};

export default ThemeProvider;
