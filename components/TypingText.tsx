"use client";

import { useEffect, useState } from "react";

const words = [
  "Cybersecurity Professional",
  "ISO/IEC 27001:2022",
  "Vulnerability Assessment & Penetration Testing",
  "Governance, Risk & Compliance",
  "CrowdStrike Falcon",
  "Trend Micro",
  "Secure SDLC",
  "DPDP Compliance",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className="mt-6 h-10 text-xl font-semibold text-cyan-400 md:text-2xl">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
}