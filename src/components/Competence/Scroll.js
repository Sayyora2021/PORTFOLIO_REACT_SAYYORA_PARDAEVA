import React, { useEffect, useRef, useState } from "react";

const Scroll = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={scrollRef}
      className={`scroll ${isScrolling ? "scroll-active" : ""}`}
    >
      <a
        href="#accueil"
        aria-label="Read more about Homepage"
        className="scroll"
      >
        <i className="fas fa-angle-double-up"></i>
      </a>
    </div>
  );
};

export default Scroll;
