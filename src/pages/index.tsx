import Head from "next/head";
import { Header } from "../components";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Home | Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main>
        {/* NOTE - HERO */}
        <section>
          {/* Row */}
          {/* BigRow */}
          {/* Row */}
          {/* BigRow */}
        </section>
      </main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
