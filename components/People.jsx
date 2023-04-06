import React from "react";
import Image from "next/image";
import peopleSign from "../public/images/icon-person.svg";

export default function People() {
  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Number of People</p>
      <div className="bg-veryLightGrayishCyan flex items-center justify-between py-2 px-4 rounded-lg">
        <div className="w-3 ">
          <Image src={peopleSign} alt="Dollar Sign" width={500} height={500} />
        </div>
        <p className="text-darkCyan text-2xl">5</p>
      </div>
    </div>
  );
}
