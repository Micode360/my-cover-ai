import Head from 'next/head'
import Header from "../components/header"
import Hero from "../components/hero"
import Features from "../components/features"
import InsuranceProducts from "../components/insurance_products"
import EverythingYouNeedToKnow from "../components/everything_you_need"
import InsuranceForBussinessModel from "../components/insurance_for_bussiness_model"
import AllInOneSolutions from "@/components/all_in_one_solutions"
import FAQs from "@/components/faq"
import JoinUs from "@/components/joinUs"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main>
      <Head>
        <title>MyCover.ai</title>
      </Head>
      <Header/>
      <Hero/>
      <Features/>
      <InsuranceProducts/>
      <EverythingYouNeedToKnow/>
      <InsuranceForBussinessModel/>
      <AllInOneSolutions/>
      <FAQs/>
      <JoinUs/>
      <Footer/>
    </main>
  )
}
