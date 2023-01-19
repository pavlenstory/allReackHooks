import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export function Child({ updateFirst, updateSecond }) {
  useEffect(() => updateFirst(), [updateFirst]);
  useEffect(() => updateSecond(), [updateSecond]);

  return <div />;
}

export function ComponentUseCallback() {
  const [counterFirst, setCounterFirst] = useState(0);
  const [counterSecond, setCounterSecond] = useState(0);

  const updateFirst = () => {
    console.log("I am not memoized");
  };

  const updateSecond = useCallback(() => {
    console.log("I am memoized");
  }, [counterFirst]);

  return (
    <div className="container">
      <h1>Check useCallback</h1>
      <Button
        variant="primary"
        onClick={() => setCounterFirst((current) => current + 1)}
      >
        not Memoized
      </Button>{" "}
      <Button
        variant="primary"
        onClick={() => setCounterSecond((current) => current + 1)}
      >
        Memoized
      </Button>
      <Child updateFirst={updateFirst} updateSecond={updateSecond} />
    </div>
  );
}
