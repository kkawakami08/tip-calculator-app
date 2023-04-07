import React from "react";

export default function Total({ tipAmount, totalAmount, handleClick }) {
  return (
    <div className="bg-darkCyan rounded-lg py-5 px-5 flex flex-col items-center gap-5 md:w-1/2 md:h-full justify-between md:py-8">
      <div className="w-full flex flex-col gap-12">
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-veryLightGrayishCyan text-md">Tip Amount</p>
            <p className="text-lightGrayishCyan text-xs">/ person</p>
          </div>
          <p className="text-primaryCyan text-2xl md:text-4xl">
            ${tipAmount.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="text-veryLightGrayishCyan text-md">Total</p>
            <p className="text-lightGrayishCyan text-xs">/ person</p>
          </div>
          <p className="text-primaryCyan text-2xl md:text-4xl">
            ${totalAmount.toFixed(2)}
          </p>
        </div>
      </div>
      <button
        className="bg-primaryCyan w-full text-darkCyan py-2 rounded-lg"
        onClick={handleClick}
      >
        CALCULATE!
      </button>
    </div>
  );
}
