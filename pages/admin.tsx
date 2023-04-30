import Head from "next/head";
import Navbar from "../adminComponents/navbar"
import Header from "../adminComponents/header"

export default function AdminDarshboard() {

  return (
    <main>
      <Head>
        <title>Admin | MyCover.ai</title>
      </Head>
      <section className="grid grid-cols-6">
        <Navbar/>
        <div className="col-span-5">
        <Header/>
        </div>
      </section>
    </main>
  );
}
