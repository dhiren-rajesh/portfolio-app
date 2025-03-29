import React, { useState, useEffect } from "react";
import "./styles.scss";
import DownwardArrow from "../../public/DownwardArrow";

export default function Banner() {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState(0);
  const [isTextLoaded, setIsTextLoaded] = useState(false);
  const message = "Dhiren's Portfolio";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      } else {
        clearInterval(interval);
        setIsTextLoaded(true);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="banner-title flex justify-center items-center h-screen w-screen">
      <div>
        {displayedText}
        {isTextLoaded && (
          <div
            className="banner-scroll 
            flex 
            items-center 
            absolute 
            left-1/2 
            -translate-x-1/2 
            cursor-pointer 
            opacity-0 
            animate-delay-1000ms"
            onClick={scrollToNextSection}
          >
            <DownwardArrow fill="#55b555" />
          </div>
        )}
      </div>
    </div>
  );
}
