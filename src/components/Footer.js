import React, { useState, useRef } from "react";

function Footer() {
  const ref = useRef(null);
  const handleScroll = () => {
    if (!footerActive) {
      setTimeout(() => {
        ref.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 250);
    } else {
      console.log("not");
    }
  };

  const [footerActive, setFooterActive] = useState(false);
  return (
    <footer>
      <div className={footerActive ? "top active" : "top"}></div>
      <div ref={ref} className={`bottom ${footerActive}`}>
        <div
          className="act-button"
          onClick={() => {
            handleScroll();
            setFooterActive(!footerActive);
          }}
        ></div>
        <p>© Copyright 2020 - Carva Broox, tbilisi’, Georgia</p>
        <p>Developed by JJ Prod</p>
      </div>
    </footer>
  );
}

export default Footer;
