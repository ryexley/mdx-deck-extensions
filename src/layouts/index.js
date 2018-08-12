import React from "react";
import { css } from "emotion";

export const VerseLayout = ({ children }) => {
  const style = css({
    background: "linear-gradient(135deg, #6ff, #6cf)",
    color: "#444",
    height: "100vh",
    padding: "2rem 3.5rem",
    textAlign: "left",
    width: "100vw",

    "h1, h2, h3, h4": {
      color: "#000"
    },

    p: {
      color: "#000"
    }
  });

  return (
    <div className={style}>
      {children}
    </div>
  );
}
