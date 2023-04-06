import React from "react";

export default function () {
  return (
    <div className="bg-darkCyan rounded-lg py-5 px-5 flex flex-col items-center gap-5">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-veryLightGrayishCyan text-md">Tip Amount</p>
          <p className="text-lightGrayishCyan text-xs">/ person</p>
        </div>
        <p className="text-primaryCyan text-2xl">$4.27</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-veryLightGrayishCyan text-md">Total</p>
          <p className="text-lightGrayishCyan text-xs">/ person</p>
        </div>
        <p className="text-primaryCyan text-2xl">$32.79</p>
      </div>
      <button className="bg-primaryCyan w-full text-darkCyan py-2 rounded-lg">
        RESET
      </button>
    </div>
  );
}
