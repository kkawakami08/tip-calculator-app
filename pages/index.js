import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import Bill from "@/components/Bill";
import TipPercentage from "@/components/TipPercentage";
import People from "@/components/People";
import Total from "@/components/Total";
import { useState } from "react";

export default function Home() {
  const [tipData, setTipData] = useState({
    billAmount: "",
    tipPercentage: 15,
    people: 1,
    tipAmount: 0,
    totalAmount: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTipData((prevTipData) => {
      return {
        ...prevTipData,
        [name]: value,
      };
    });
  }
  console.log(tipData.billAmount);
  return (
    <>
      <Head>
        <title>Tip Calculator App</title>
      </Head>
      <main className="h-screen flex flex-col items-center bg-lightGrayishCyan md:justify-center py-14 ">
        <div className="w-1/3 pb-14 flex items-center justify-center md:w-20">
          <Image
            src={logo}
            alt="Tip calculator logo"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-white w-full  rounded-3xl px-7 py-7 flex flex-col gap-7 md:w-[50rem] md:flex-row md:items-center">
          <div className="flex flex-col gap-7 md:w-1/2 md:h-full">
            <Bill billAmount={tipData.billAmount} handleChange={handleChange} />
            <TipPercentage />
            <People />
          </div>
          <Total />
        </div>
      </main>
    </>
  );
}
