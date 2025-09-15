import React from "react";
import "./DotPattern.css";

export default function DotPattern({ theme = "dark" }) {
  return (
    <div className={`dot-pattern ${theme}`} />
  );
}
