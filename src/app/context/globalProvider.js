"use client";

import { createContext, useState, useContext } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

const [selectedTheme, setSelectedTheme] = useState(0);
const theme = themes[selectedTheme];

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext value={{}}>{children}</GlobalUpdateContext>
    </GlobalContext>
  );
};

export const useGlobalState = useContext(GlobalContext);
export const useGlobalUpdate = useContext(GlobalUpdateContext);
