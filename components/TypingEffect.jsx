"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingEffect() {
  return (
    <TypeAnimation
      sequence={[
        "Abhishek",
        1000, //delay
        "Web Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "1em", display: "inline-block", padding: "1rem 0" }}
      repeat={Infinity}
    />
  );
}
