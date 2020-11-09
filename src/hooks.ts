import { useEffect, useRef } from "react";

export function useCounter(
): [number] {
  const counter = useRef(1);

  useEffect(() => {
    counter.current++;
  })

  return [counter.current];
}
