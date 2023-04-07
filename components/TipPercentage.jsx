import React from "react";

export default function TipPercentage({
  tipPercentage,
  handleChange,
  handleClick,
}) {
  const tipBoxStyle =
    "bg-darkCyan rounded-md flex items-center justify-center py-2 hover:bg-primaryCyan group hover:cursor-pointer ";

  const buttonStyle =
    "bg-darkCyan rounded-md text-veryLightGrayishCyan py-2 hover:bg-primaryCyan hover:text-darkCyan";

  const percentStyle = "text-veryLightGrayishCyan group-hover:text-darkCyan";

  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Select Tip %</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <button id="5" className={buttonStyle} onClick={handleClick}>
          5%
        </button>
        <button id="10" className={buttonStyle} onClick={handleClick}>
          10%
        </button>
        <button id="15" className={buttonStyle} onClick={handleClick}>
          15%
        </button>
        <button id="25" className={buttonStyle} onClick={handleClick}>
          25%
        </button>
        <button id="50" className={buttonStyle} onClick={handleClick}>
          50%
        </button>
        <input
          type="number"
          placeholder="Custom"
          className="bg-veryLightGrayishCyan py-2 px-4 rounded-lg w-full text-center focus:outline-none focus:ring focus:ring-primaryCyan focus:border-primaryCyan hover:cursor-pointer"
          onChange={handleChange}
          name="tipPercentage"
          value={tipPercentage}
          min="0"
        />
      </div>
    </div>
  );
}
