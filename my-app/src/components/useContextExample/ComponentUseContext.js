import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "./themeContext";
import "./ComponentUseContext.css";

export const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`constiner container-${theme}`}>
      <h1>Theme {theme}</h1>
    </div>
  );
};

export function ComponentUseContext() {
  const { toggle } = useContext(ThemeContext);
  return (
    <div className="container">
      <Card />
      <Button variant="primary" onClick={toggle}>
        Change theme
      </Button>
    </div>
  );
}
