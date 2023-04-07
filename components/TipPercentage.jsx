import React from "react";

export default function TipPercentage({
  tipPercentage,
  handleChange,
  handleClick,
}) {
  const tipBoxStyle =
    "bg-darkCyan rounded-md flex items-center justify-center py-2 hover:bg-primaryCyan group hover:cursor-pointer";

  const percentStyle = "text-veryLightGrayishCyan group-hover:text-darkCyan";

  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Select Tip %</p>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <div id="5" className={tipBoxStyle} onClick={handleClick}>
          <p className={percentStyle}>5%</p>
        </div>
        <div id="10" className={tipBoxStyle} onClick={handleClick}>
          <p className={percentStyle}>10%</p>
        </div>
        <div id="15" className={tipBoxStyle} onClick={handleClick}>
          <p className={percentStyle}>15%</p>
        </div>
        <div id="25" className={tipBoxStyle} onClick={handleClick}>
          <p className={percentStyle}>25%</p>
        </div>
        <div id="50" className={tipBoxStyle} onClick={handleClick}>
          <p className={percentStyle}>50%</p>
        </div>
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
