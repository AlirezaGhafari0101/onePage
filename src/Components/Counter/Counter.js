import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Counter({ number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counter = setInterval(() => {
      if (count < number) {
        setCount((prevCount) => prevCount + 1);
      } else {
      }
    }, 50);

    if (count === number) {
      clearInterval(counter);
    }

    return () => {
      clearInterval(counter);
    };
  }, [count]);

  return <>{count}</>;
}
