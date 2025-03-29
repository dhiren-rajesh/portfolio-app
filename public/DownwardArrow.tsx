import React from "react";

interface DownwardArrowProps {
  fill?: string; // Optional fill color prop
}

export default function DownwardArrow({
  fill = "#ffffff",
}: DownwardArrowProps) {
  return (
    <div>
      <svg
        fill={fill}
        width="50px"
        height="50px"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
        id="memory-arrow-down"
      >
        <path d="M12 17H10V16H9V15H8V14H7V13H6V11H8V12H9V13H10V4H12V13H13V12H14V11H16V13H15V14H14V15H13V16H12" />
      </svg>
    </div>
  );
}
