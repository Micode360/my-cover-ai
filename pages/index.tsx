import Head from 'next/head'
import Header from "../staticComponents/header"
import Hero from "../staticComponents/hero"
import Features from "../staticComponents/features"
import InsuranceProducts from "../staticComponents/insurance_products"
import EverythingYouNeedToKnow from "../staticComponents/everything_you_need"
import InsuranceForBussinessModel from "../staticComponents/insurance_for_bussiness_model"
import AllInOneSolutions from "../staticComponents/all_in_one_solutions"
import FAQs from "../staticComponents/faq"
import JoinUs from "../staticComponents/joinUs"
import Footer from "../staticComponents/footer"
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
