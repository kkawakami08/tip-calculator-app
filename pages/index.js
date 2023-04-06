import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import Bill from "@/components/Bill";
import TipPercentage from "@/components/TipPercentage";
import People from "@/components/People";
import Total from "@/components/Total";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tip Calculator App</title>
      </Head>
      <main className="h-screen flex flex-col items-center bg-lightGrayishCyan py-12">
        <div className="w-1/3 pb-12 flex items-center justify-center md:w-20">
          <Image
            src={logo}
            alt="Tip calculator logo"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-white w-full  rounded-3xl px-7 py-7 flex flex-col gap-7 md:w-[50rem] md:flex-row md:items-center">
          <div className="flex flex-col gap-7 md:w-1/2 md:h-full">
            <Bill />
            <TipPercentage />
            <People />
          </div>
          <Total />
        </div>
      </main>
    </>
  );
}
