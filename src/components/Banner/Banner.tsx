import React, { useState, useEffect } from "react";
import "./styles.scss";
import DownwardArrow from "../../../public/DownwardArrow";

export default function Banner() {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState(0);
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const title = "DHIREN'S PORTFOLIO";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < title.length) {
        setDisplayedText((prev) => prev + title[index]);
        setIndex(index + 1);
      } else {
        clearInterval(interval);
        setIsTextLoaded(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="banner flex justify-center items-center h-screen w-screen">
      <div className="text-[5rem] border-2 border-dashed px-[2rem]">
        {displayedText}
      </div>
      {isTextLoaded && (
        <div
          className="
            banner-scroll 
            flex
            flex-col
            justify-center 
            items-center 
            absolute 
            left-1/2 
            -translate-x-1/2 
            opacity-0 
            animate-delay-1000ms
            "
        >
          <div className="banner-scroll-text">SCROLL DOWN</div>
          <DownwardArrow fill="#000000" />
        </div>
      )}
    </div>
  );
}
