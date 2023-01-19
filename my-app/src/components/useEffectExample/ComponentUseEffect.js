import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(intervalValue);
    const intervalId = setInterval(() => {
      if (intervalValue) setValue((value) => value + 1);
    }, intervalValue);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalValue]);

  useEffect(() => console.log("test"), []);
  return (
    <div className="container">
      <h2>Timer</h2>
      <h3>{value}</h3>
    </div>
  );
}

export function ComponentUseEffect() {
  const [intervalValue, setIntervalValue] = useState();

  const handleIntervalClick = (ms) => {
    setIntervalValue(ms);
  };

  return (
    <div className="container">
      <h1>Check useEffect</h1>
      <Timer intervalValue={intervalValue}></Timer>
      <Button variant="primary" onClick={() => handleIntervalClick(100)}>
        100ms
      </Button>{" "}
      <Button variant="primary" onClick={() => handleIntervalClick(500)}>
        500ms
      </Button>{" "}
      <Button variant="primary" onClick={() => handleIntervalClick(1000)}>
        1s
      </Button>
    </div>
  );
}
