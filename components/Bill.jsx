import React from "react";
import Image from "next/image";
import dollarSign from "../public/images/icon-dollar.svg";

export default function Bill({ billAmount, handleChange }) {
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
          className="bg-veryLightGrayishCyan py-2 px-4 rounded-lg w-full text-right focus:outline-none focus:ring focus:ring-primaryCyan focus:border-primaryCyan hover:cursor-pointer"
          onChange={handleChange}
          name="billAmount"
          value={billAmount}
          required
          step="0.01"
          min="0"
        />
      </div>
    </div>
  );
}
