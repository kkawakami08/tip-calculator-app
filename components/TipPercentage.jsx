import React from "react";

export default function TipPercentage() {
  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Select Tip %</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-darkCyan rounded-md flex items-center justify-center py-2">
          <p className="text-veryLightGrayishCyan">5%</p>
        </div>
        <div className="bg-darkCyan rounded-md flex items-center justify-center py-2">
          <p className="text-veryLightGrayishCyan">10%</p>
        </div>
        <div className="bg-darkCyan rounded-md flex items-center justify-center py-2">
          <p className="text-veryLightGrayishCyan">15%</p>
        </div>
        <div className="bg-darkCyan rounded-md flex items-center justify-center py-2">
          <p className="text-veryLightGrayishCyan">25%</p>
        </div>
        <div className="bg-darkCyan rounded-md flex items-center justify-center py-2">
          <p className="text-veryLightGrayishCyan">50%</p>
        </div>
        <div className="bg-veryLightGrayishCyan rounded-md flex items-center justify-center py-2">
          <p className="text-darkGrayishCyan">Custom</p>
        </div>
      </div>
    </div>
  );
}
