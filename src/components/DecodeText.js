import { useEffect, useRef, useState } from "react";

const GLYPHS = "アイウエオカキクケコサシスセソタチツテト0123456789#$%&*+=-<>/\\";

export default function DecodeText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
}) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId;
    let timeoutId;
    const totalFrames = text.length * 3 + 12;
    frameRef.current = 0;

    const tick = () => {
      frameRef.current += 1;
      const revealCount = Math.floor((frameRef.current / totalFrames) * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          out += " ";
        } else if (i < revealCount) {
          out += text[i];
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (frameRef.current < totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [text, delay]);

  return <Tag className={className}>{display}</Tag>;
}
