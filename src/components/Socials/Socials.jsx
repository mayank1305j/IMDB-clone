import React, { useState } from "react";
import "./socials.css";

const Socials = () => {
  const initial = {
    top: "0%",
    zIndex: -1,
    opacity: 0,
  };

  const change = {
    top: "-300%",
    zIndex: 1,
    opacity: 1,
  };

  const initial2 = {
    top: "0%",
    zIndex: -2,
    opacity: 0,
  };

  const change2 = {
    top: "-150%",
    zIndex: 1,
    opacity: 1,
  };

  const [styles, setStyle] = useState(true);
  return (
    <div
      className="socials"
      onClick={() => {
        setStyle(!styles);
      }}
    >
      <i class="ri-information-fill"></i>
      <div className="linkedin" style={styles === true ? initial : change}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mayank-joshi-9964a51b8/"
        >
          <i className="ri-linkedin-line"></i>
        </a>
      </div>

      <div className="github" style={styles === true ? initial2 : change2}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mayank1305j"
        >
          <i className="ri-github-fill"></i>
        </a>
      </div>
    </div>
  );
};

export default Socials;
