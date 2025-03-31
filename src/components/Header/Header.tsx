import React from "react";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header flex px-[2rem] py-[1rem] mx-[1rem] my-[1rem] fixed w-[97.5%] z-50 rounded-[2rem]">
      <div className="w-2/3">Dhiren's Potfolio</div>
      <div className="flex w-1/3">
        <div className="px-[2rem]">About Me</div>
        <div className="px-[2rem]">Tech Stacks</div>
        <div className="px-[2rem]">Projects</div>
      </div>
    </div>
  );
}
