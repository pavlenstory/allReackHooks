import { useEffect, useLayoutEffect } from "react";

const longRunningTask = () => {
  for (let i = 0; i < 99999; i++) {
    console.log();
  }
};

export function ComponentUseLayoutEffect() {
  console.log("start");
  useEffect(() => console.log("useEffect"), []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect start");
    longRunningTask();
    console.log("useLayoutEffect end");
  }, []);

  return <div className="container"></div>;
}
