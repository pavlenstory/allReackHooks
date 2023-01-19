import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const sum = (n) => {
  console.log("reconvert");
  return n + n + n;
};

export function ComponentUseMemo({ number = 0 }) {
  const [isRed, setIsRed] = useState();
  const currentNumber = useMemo(() => sum(number), [number]);
  return (
    <div className="container">
      <h1>Check useMemo</h1>
      <Button variant="primary" onClick={() => setIsRed((current) => !current)}>
        Change color
      </Button>
      <p>Current color: {isRed ? "red" : "green"}</p>
    </div>
  );
}
