import React, { useEffect, useImperativeHandle, useRef } from "react";

const CustomInput = React.forwardRef(({}, ref) => {
  const input = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => input.current.focus(),
  }));
  return <input ref={input} />;
});

export function ComponentUseImperativeHandle() {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div className="container">
      <h1>Check UseImperativeHandle</h1>
      <CustomInput ref={input} />
    </div>
  );
}
