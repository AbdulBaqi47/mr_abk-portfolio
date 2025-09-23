"use client";

import { useEffect, useMemo, useRef } from "react";

export default function TextFlip() {
  const words = useMemo(
    () => ["Laravel", "PHP", "Vue.js", "Laravel", "HTML", "CSS", "Laravel"],
    [],
  );

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 2;

      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);

  return (
    <div className="box-content flex flex-col gap-2 text-xl font-semibold md:flex-row md:gap-2 md:text-3xl">
      <p className="text-pretty text-2xl tracking-tight text-foreground/80 md:text-3xl">
        Crafting seamless web solutions with{" "}
      </p>
      <div
        ref={tallestRef}
        className="ml-0 flex flex-col overflow-hidden text-center  font-mono tracking-tight text-purple-700 dark:text-purple-200 md:ml-2"
      >
        {words.map((word, index) => (
          <span key={index} className="animate-flip-words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
