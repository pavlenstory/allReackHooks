import "./App.css";
import { ComponentUseEffect } from "./components/useEffectExample/ComponentUseEffect";
import { ComponentUseState } from "./components/useStateExample/ComponentUseState";
import { ThemeContext } from "./components/useContextExample/themeContext";
import { ComponentUseContext } from "./components/useContextExample/ComponentUseContext";
import { useState } from "react";
import { ComponentUseReducer } from "./components/useReducerExample/ComponetUseReducer";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <div className="App">
      <ComponentUseState />
      <ComponentUseEffect />
      <ThemeContext.Provider value={{ theme, toggle: toggleTheme }}>
        <ComponentUseContext />
      </ThemeContext.Provider>
      <ComponentUseReducer />
    </div>
  );
}

export default App;
