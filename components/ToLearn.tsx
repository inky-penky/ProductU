import Image from "next/image"
import Data from "./data/learnData"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

export default function ToLearn() {
  const [ref, inView] = useInView({ triggerOnce : true })
  const animation1 = useAnimation()
    useEffect(()=>{
        if (inView) {
            animation1.start({
                y : 0,
                transition : {
                    type : "easeout", duration : 2, bounce : 0.3
                }
            })
        }
        if (!inView) {
            animation1.start({
                y : "-30vh"
            }) 
        }
    })
    const course = Data.map((data, index)=>{
        return(
                <div key={index}>
                    <div className="duration-500 cursor-pointer md:group-hover:blur-sm md:hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 tracking-wider pl-4 mx-[1rem] p-[1.3rem] pb-7 mb-7 w-[20rem] h-[16.35rem] rounded-[1.5rem] bg-gradient-to-r from-blue-100 to-violet-100 md:w-[15.35rem] md:h-[18.35rem] md:mx-[0.35rem]">
                    <h1 className="m-0 mb-2 font-extralight text-[0.65rem]">{data.module}</h1>
                    <h1 className="m-0 mb-4 w-full font-semibold text-sm">{data.title}</h1>
                        <ul className="pl-[0.5rem]">
                            {
                                (data.courses).map((topic =>{
                                    return(
                                        <li key={topic.id} className="m-0 mb-[0.25rem] text-[0.7rem] font-extralight">{topic.name}</li>
                                    )
                                    }))
                            }
                        </ul>
                        <div className="border-b-2 border-gray-500 mt-[1.85rem] md:mt-[2.75rem] -mb-[o.75rem] w-[19.5rem] relative -left-[0.75rem] md:w-[15.15rem]"></div>
                    <div className="w-[19.8rem] relative -ml-[1rem] pl-[1.5rem] md:pl-[2rem] pt-[0.9rem] md:w-[15.38rem] mt-[0.2rem]">
                        <div className="w-full -ml-[0.65rem] md:-ml-[0.8rem] md:text-[0.6rem] text-[0.65rem] font-extralight">
                            {data.tag}
                            <div className="mt-[0.5rem] -ml-[0.125rem] md:-ml-[0.25rem] w-[18rem] flex justify-between md:w-[13.5rem]">
                                {(data.caseStudy).map((logo =>{
                                    return(
                                        <div className="w-[6.5rem]" key={logo.id}><Image className="w-[5.5rem] mr-[3rem]" src={logo.logo} alt="logo"/></div>
                                    )
                                }))}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
        )
    })
    return(
        <motion.section ref={ref} animate={animation1} 
            className="flex flex-col justify-between items-center m-0 mt-[7.25rem] w-full">
            <h1 className="mb-[3rem] font-semibold text-center text-[1.75rem]">What Will You Learn</h1>
            <div className="group flex flex-col justify-between items-center md:grid md:grid-cols-3 md:-gap-x-[1.5rem]">
            {course}
            </div>
        </motion.section>
    )
}
