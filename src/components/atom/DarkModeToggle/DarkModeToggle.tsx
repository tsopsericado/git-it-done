"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
// import { ThemeContext } from "../../../context/ThemeContext";



const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="w-14 h-8 border border-gray-500 border-opacity-70 rounded-full flex items-center justify-between px-1 relative cursor-pointer" onClick={toggleTheme}>
      <div className="text-sm">🌙</div>
      <div className="text-sm">🔆</div>
      <div
        className=" w-6 h-6 bg-blue-700 rounded-full absolute"
        style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
