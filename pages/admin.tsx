import { useState } from "react"
import Head from "next/head";
import Navbar from "../adminComponents/navbar"
import Header from "../adminComponents/header"
import Claim from "../adminComponents/claim"
import MakeClaim from "../adminComponents/make_claim"
import ClaimModal from "../adminComponents/claimModal"
export default function AdminDarshboard() {
const [nav, setNav] = useState<any>("claim");
  return (
    <main>
      <Head>
        <title>Admin | MyCover.ai</title>
      </Head>
      <section className="grid grid-cols-6">
        <Navbar/>
        <div className="col-span-5">
        <Header nav={nav} setNav={setNav}/>
        {nav === 'claim'? (<Claim setNav={setNav} />):nav === 'makeClaim'?(<MakeClaim  setNav={setNav} />):nav === 'claimModal'?<ClaimModal setNav={setNav}/>:''}
        </div>
      </section>
    </main>
  );
}
