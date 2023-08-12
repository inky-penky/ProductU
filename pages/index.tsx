import React from "react"
import Hero from "../components/Hero"
import Productize from "../components/Productize"
import ToLearn from "../components/ToLearn"
import Mentors from "../components/Mentors"
import Whyus from "../components/Whyus"
import Faq from "../components/Faq"
import Pricing from "../components/Pricing"


const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Productize/>
      <ToLearn/>
      <Mentors/>
      <Whyus />
      <Pricing />
      <Faq />
    </div>
  )
}

export default App
