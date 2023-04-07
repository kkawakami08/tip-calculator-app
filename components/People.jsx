import React from "react";
import Image from "next/image";
import peopleSign from "../public/images/icon-person.svg";

export default function People({ people, handleChange }) {
  return (
    <div className="">
      <p className="text-darkGrayishCyan pb-2">Number of People</p>
      <div className="relative ">
        <div className="w-3 absolute top-1/4 left-5">
          <Image src={peopleSign} alt="People Sign" width={500} height={500} />
        </div>
        <input
          type="number"
          placeholder="1"
          className="bg-veryLightGrayishCyan py-2 px-4 rounded-lg w-full text-right focus:outline-none focus:ring focus:ring-primaryCyan focus:border-primaryCyan hover:cursor-pointer invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          onChange={handleChange}
          name="people"
          value={people}
          required
          min="1"
        />
      </div>
    </div>
  );
}
