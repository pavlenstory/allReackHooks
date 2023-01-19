import "./App.css";
import { ComponentUseEffect } from "./components/useEffectExample/ComponentUseEffect";
import { ComponentUseState } from "./components/useStateExample/ComponentUseState";
import { ThemeContext } from "./components/useContextExample/themeContext";
import { ComponentUseContext } from "./components/useContextExample/ComponentUseContext";
import { useState } from "react";
import { ComponentUseReducer } from "./components/useReducerExample/ComponetUseReducer";
import { ComponentUseCallback } from "./components/useCallbackExample/ComponentUseCallback";
import { ComponentUseMemo } from "./components/useMemoExample/ComponentUseMemo";
import { ComponentUseRef } from "./components/useRefExample/ComponentUseRef";
import { ComponentUseImperativeHandle } from "./components/useImperativeHandleExample/ComponentUseImperativeHandle";
import { ComponentUseLayoutEffect } from "./components/useLayoutEffectExample/ComponentUseLayoutEffect";
import { ComponentUseDebugValue } from "./components/useDebugValueExample/ComponentUseDebugValue";

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
      <ComponentUseCallback />
      <ComponentUseMemo />
      <ComponentUseRef />
      <ComponentUseImperativeHandle />
      <ComponentUseLayoutEffect />
      <ComponentUseDebugValue />
    </div>
  );
}

export default App;
