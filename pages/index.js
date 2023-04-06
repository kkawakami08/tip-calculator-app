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
      <main className="h-screen flex flex-col items-center bg-lightGrayishCyan">
        <div className="w-1/3 py-12 flex items-center justify-center">
          <Image
            src={logo}
            alt="Tip calculator logo"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-white w-full h-full rounded-t-3xl px-7 py-7 flex flex-col gap-7">
          <Bill />
          <TipPercentage />
          <People />
          <Total />
        </div>
      </main>
    </>
  );
}
