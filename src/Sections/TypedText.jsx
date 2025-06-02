import React, { useEffect, useState } from "react";

const items = [
  { text: "WEB DEVELOPER", className: "text-[#BBA14F] font-bold" },
  { text: "REACT", className: "text-black" },
  { text: "WORDPRESS", className: "text-black" },
  { text: "FIGMA", className: "text-black" },
  { text: "ADOBE XD", className: "text-black" },
];

const TypedText = ({ speed = 100, pause = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [itemIndex, setItemIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentItem = items[itemIndex];
    const currentText = currentItem.text;

    let timeout;
    if (!deleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!deleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setItemIndex((prev) => (prev + 1) % items.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, itemIndex, speed, pause]);

  const className = items[itemIndex].className;

  return <span className={`${className} transition-all`}>{displayText}|</span>;
};

export default TypedText;
