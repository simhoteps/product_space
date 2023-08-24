import React, { RefObject } from "react";

export function useResponsiveBreakpoints(
  elRef: RefObject<HTMLDivElement>
  // breakpoints: { [key: string]: number }[]
) {
  // const firstQuery = Object.keys(breakpoints[0])[0];
  const [divSize, setDivSize] = React.useState<number>(0);

  const observer = new ResizeObserver((entries) => {
    // Only care about the first element, we expect one element or be watched
    if (entries[0]) {
      setDivSize(entries[0].contentRect.width);
    }
  });
  React.useEffect(() => {
    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => {
      if (elRef.current) {
        observer.unobserve(elRef.current);
      }
    };
  }, [divSize]);

  return divSize;
}
