import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "./themeContext";
import "./ComponentUseContext.css";

export const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`constiner container-${theme}`}>
      <h2>Theme {theme}</h2>
    </div>
  );
};

export function ComponentUseContext() {
  const { toggle } = useContext(ThemeContext);
  return (
    <div className="container">
      <h1>Check useContext</h1>
      <Card />
      <Button variant="primary" onClick={toggle}>
        Change theme
      </Button>
    </div>
  );
}
