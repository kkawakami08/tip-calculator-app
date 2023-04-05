import Head from "next/head";
import Image from "next/image";
import logo from "../public/images/logo.svg";

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
        <div className="bg-white w-full h-full rounded-t-3xl">
          <div>
            <h1>Bill</h1>
          </div>
          <div>
            <h1>Tip</h1>
          </div>
          <div>
            <h1>Number of People</h1>
          </div>
          <div>
            <h1>Total</h1>
          </div>
        </div>
      </main>
    </>
  );
}
