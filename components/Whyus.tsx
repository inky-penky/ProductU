import Image from "next/image"
import APM from '../public/vectors/images/apm_certification.png'
import Protothon from '../public/vectors/images/prothom.png'
import Product from '../public/vectors/images/product_talk.png'
import { Carousel } from "./Carousel";



function Whyus() {
  
  return (
    <div className="flex flex-col py-5 text-center lg:py-20 lg:gap-16">
      <h1 className=" text-[1.5rem] lg:text-[2.5rem]">Why us?</h1>
      <Carousel />
      <div className="">
        <div className="py-10 ">
          <h1 className=" text-[1.5rem] lg:text-[2.5rem]">What makes us Different?</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 font-semibold lg:flex-row text-start">
          <div className="mx-5 rounded-lg shadow-lg shadow-gray-300 lg:mx-0">
            <Image src={APM} alt="" />
            <p className="pl-6 py-7 lg:text-[1.25rem]">Cohort APM Certification</p>
          </div>
          <div className="mx-5 rounded-lg shadow-lg shadow-gray-300 lg:mx-0">
            <Image src={Protothon} alt="" />
            <p className="pl-6 py-7 lg:text-[1.25rem]">Protothon</p>
          </div>
          <div className="mx-5 rounded-lg shadow-lg shadow-gray-300 lg:mx-0">
            <Image src={Product} alt="" />
            <p className="pl-6 py-7 lg:text-[1.25rem]">Product Talk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus