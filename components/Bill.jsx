import React from "react";
import Image from "next/image";
import dollarSign from "../public/images/icon-dollar.svg";

export default function Bill() {
  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Bill</p>
      <div className="bg-veryLightGrayishCyan flex items-center justify-between py-2 px-4 rounded-lg">
        <div className="w-3 ">
          <Image src={dollarSign} alt="Dollar Sign" width={500} height={500} />
        </div>
        <p className="text-darkCyan text-2xl">142.55</p>
      </div>
    </div>
  );
}
