import React from "react"
import Hero from "../components/Hero"
import Productize from "../components/Productize"
import ToLearn from "../components/ToLearn"
import Mentors from "../components/Mentors"
import Whyus from "../components/Whyus"
import Faq from "../components/Faq"
import Pricing from "../components/Pricing"
import Footer from "../components/Footer"


const App = () => {
  return (
    <div className="">
      <Hero />
      <Productize/>
      <ToLearn/>
      <Mentors/>
      {/* <Whyus /> */}
      <Pricing />
      <Faq />
      <Footer />
    </div>
  )
}

export default App
