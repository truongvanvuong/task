import { createContext, useState } from "react";
import Routers from "./Router";
import "animate.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "./App.css";
const ThemeContext = createContext();
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <Routers />
    </ThemeContext.Provider>
  );
};

export { ThemeContext, App };
