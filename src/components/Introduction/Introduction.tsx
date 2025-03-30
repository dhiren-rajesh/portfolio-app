import React, { useEffect, useState } from "react";
import "./styles.scss";

interface QandA {
  question?: string;
  answer?: string;
}

export default function Introduction() {
  const [opacity, setOpacity] = useState(0);

  const QandA: QandA[] = [
    {
      question: "Who Am I?",
      answer:
        "Hi I'm Dhiren. I'm a Software Engineer based out of Bengaluru, India.",
    },
    {
      question: "What Am I?",
      answer:
        "In case it wasn't clear, I am a human being and not an AI bot, although my font selection may say otherwise.",
    },
    {
      question: "What do I do?",
      answer:
        "I'm a fullstack developer who works on various technologies. However, the primary ones are Next.JS, Node.JS and any form of CSS.",
    },
    {
      question: "Am I good at what I do?",
      answer:
        "I think I fare pretty well. Yeah, that's about it. I don't know what exactly you were expecting.",
    },
    {
      question: "Do I enjoy what I do?",
      answer:
        "Yes, a 100%. We all have our ups and downs but that doesn't mean you stop enjoying what you do.",
    },
    {
      question: "What do I like besides code?",
      answer:
        "I like sports, Motorsports in particular. I like cars, motorcycles, cricket and beer. I enjoy good music and going to the gym as well.",
    },
  ];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage =
      (scrollPosition / (documentHeight - windowHeight)) * 100;
    const newOpacity = Math.min(Math.max(scrollPercentage / 100, 0), 1);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="intro-fade introduction flex flex-col h-screen w-screen"
      style={{ opacity }}
    >
      <div className="flex justify-center items-center text-[3rem]">
        <div className="border-b-2 border-dashed px-[1rem]">About</div>
      </div>
      <div className="flex w-1">
        <div className="flex w-1/2 justify-center items-center">
          <img
            src="https://i.postimg.cc/TwtMPKBp/Ghibli-Style-Art.png"
            alt="Profile Pic"
            className="w-[25rem]"
          />
        </div>
        <div className="w-1/2 m-[5rem]">
          {QandA?.map((item, index) => (
            <div key={index} className="w-3/4 py-[0.5rem]">
              <p className="text-[1.5rem]">{item?.question}</p>
              <p className="text-[1rem]">{item?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
