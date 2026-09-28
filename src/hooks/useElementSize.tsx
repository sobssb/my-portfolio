import { useRef, useLayoutEffect } from "react";

type parameters = {
  minSize?: number;
  maxSize?: number;
  buffer?: number;
  measureRef?: React.RefObject<HTMLElement | null>;
};

const useElementSize = <T extends HTMLElement = HTMLElement>({
  minSize = 10,
  maxSize = 400,
  buffer = 2,
  measureRef,
}: parameters = {}) => {
  const sizeRef = useRef<T | null>(null);

  useLayoutEffect(() => {
    const handleFit = () => {
      const sizeEl = sizeRef.current;
      const measureEl = measureRef?.current || sizeEl;
      if (!sizeEl || !measureEl) return;

      const sizeStyle = window.getComputedStyle(sizeEl);
      const paddingLeft = parseFloat(sizeStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(sizeStyle.paddingRight) || 0;
      const containerWidth =
        sizeEl.clientWidth - paddingLeft - paddingRight - buffer;
      if (containerWidth <= 0) return;

      sizeEl.style.fontSize = "100px";
      const naturalWidth = measureEl.scrollWidth;
      if (naturalWidth <= 0) return;

      let fontSize = 100 * (containerWidth / naturalWidth);
      fontSize = Math.max(minSize, Math.min(maxSize, fontSize));
      sizeEl.style.fontSize = `${fontSize}px`;
    };

    handleFit();
    document.fonts?.ready.then(handleFit);

    window.addEventListener("resize", handleFit);

    return () => window.removeEventListener("resize", handleFit);
  }, [minSize, maxSize, buffer, measureRef]);

  return sizeRef;
};

export default useElementSize;
