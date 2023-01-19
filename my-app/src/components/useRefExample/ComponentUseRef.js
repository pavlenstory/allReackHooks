import { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

function Timer() {
  const [value, setValue] = useState(0);

  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setValue((currentValue) => currentValue + 1);
    }, 1000);

    return () => {
      console.log("cleared");
      clearInterval(intervalId.current);
    };
  });

  const handleCancelClick = () => {
    clearInterval(intervalId);
  };

  return (
    <div className="container">
      <h2>Timer</h2>
      <p>{value}</p>
      <Button onClick={handleCancelClick}>Cancel</Button>
    </div>
  );
}

export function ComponentUseRef() {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);
  return (
    <div className="container">
      <h1>Check useRef with element reference</h1>
      <p>Hello, {name}!</p>
      <Form>
        <Form.Control
          ref={input}
          type="text"
          placeholder="Enter name"
          onChange={handleNameChange}
        />
      </Form>
      <h1>Check useRef to store value</h1>
      <Timer />
    </div>
  );
}
