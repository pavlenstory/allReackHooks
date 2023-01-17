import "./App.css";
import { ComponentUseEffect } from "./components/useEffectExample/Component";
import { ComponentUseState } from "./components/useStateExample/ComponentUseState";

function App() {
  return (
    <div className="App">
      <ComponentUseState />
      <ComponentUseEffect />
    </div>
  );
}

export default App;
