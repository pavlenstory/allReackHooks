import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((value) => value + 1);
    }, intervalValue);

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalValue]);
  return (
    <div className="container">
      <h1>Timer</h1>
      <h2>{value}</h2>
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
      <Timer intervalValue={intervalValue}></Timer>
      <Button varian="primary" onClick={() => handleIntervalClick(100)}>
        100ms
      </Button>
      <Button varian="primary" onClick={() => handleIntervalClick(500)}>
        500ms
      </Button>
      <Button varian="primary" onClick={() => handleIntervalClick(1000)}>
        1s
      </Button>
    </div>
  );
}
