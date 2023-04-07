import React from "react";
import Image from "next/image";
import dollarSign from "../public/images/icon-dollar.svg";

export default function Bill({ billAmount, handleChange }) {
  console.log(billAmount);
  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Bill</p>
      <div className="relative ">
        <div className="w-3 absolute top-1/4 left-5">
          <Image src={dollarSign} alt="Dollar Sign" width={500} height={500} />
        </div>
        <input
          type="number"
          placeholder="0.00"
          className="bg-veryLightGrayishCyan py-2 px-4 rounded-lg w-full text-right"
          onChange={handleChange}
          name="billAmount"
          value={billAmount}
          required
          step="0.01"
          min="0"
        />
      </div>

      {/* <div className="bg-veryLightGrayishCyan flex items-center justify-between py-2 px-4 rounded-lg">
        <div className="w-3 ">
          <Image src={dollarSign} alt="Dollar Sign" width={500} height={500} />
        </div>
        <p className="text-darkCyan text-2xl">142.55</p>
      </div> */}
    </div>
  );
}
