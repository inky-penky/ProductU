import React from "react";
import Slider from "./slider";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [ref, inView] = useInView({ triggerOnce : true })
  const animation1 = useAnimation()
  useEffect(()=>{
        if (inView) {
            animation1.start({
                y : 0,
                transition : {
                    type : "easeout", duration : 0.6, bounce : 0.3
                }
            })
        }
        if (!inView) {
            animation1.start({
                y : "-50vh"
            }) 
        }
    })
    return(
      <motion.section ref={ref} animate={animation1}
        className="-z-10 bg-gradient-to-b from-sky-100 to-slate-50 bg-contain w-auto mt-18 h-auto pt-[5rem] md:pt-[6rem] mb-8">
          <div className="bg-hero -z-30 bg-cover">
            <div className="mt-10 h-36 flex justify-between flex-col">
                <div className="flex justify-center text-center">
                  <div className="mt-36 leading-[3rem] w-[420px] font-semibold m-0 mb-4 text-darkblue text-[1.55rem] md:text-[1.85rem] flex self-center tracking-wider lg:w-[450px]">Become A Product Manager In 12 Weeks</div>
                </div>
            <p className="m-0 mb-6 w-fit relative font-normal top-2 text-lg lg:tracking-wider lg:flex justify-center self-center">No Prior Experience required *</p> 
            <button className="duration-500 hover:scale-[0.85] tracking-tight w-44 relative top-10 p-3 font-bold rounded-3xl m-0 bg-gradient-to-r from-cyan-300 to-blue-800 text-white md:flex justify-center self-center md:-mb-10"><a href="#">Apply for the Program</a></button>
            </div>
            <div className="mt-20 flex justify-center">
            <div className="duration-500 w-56 p-10 pl-16 pb-8 relative m-0 mt-60 mb-6 bg-slate rounded-[70px] md:pb-6 md:rounded-[300px] md:w-auto">
                <div className="flex flex-col justify-center content-center md: w-fit md:flex-row md:justify-around">
                <div className="w-36 mr-0 pr-8 mb-6 md:w-auto">
                  <h3 className="font-bold">Live</h3>
                  <p className="text-xs">Sessions on Zoom</p>
                </div>
                <div className="w-auto mr-0 mb-6 md:w-auto md:px-5">
                  <h3 className="font-bold pr-8">6 to 12 Weeks</h3>
                  <p className="text-xs">Program Timeline</p>
                </div>
                  <div className="w-auto mr-0 mb-6 md:w-auto md:px-5">
                  <h3 className="font-bold pr-8">Mentorship</h3>
                  <p className="text-xs">With experience PMs</p>
                </div>
                <div className="w-auto mr-0 md:w-auto md:px-5">
                  <h3 className="font-bold pr-8">Placement</h3>
                  <p className="text-xs">Support for 1 year</p>
                </div>
              </div>
            </div>
            </div>
          </div>
      <Slider/>
      </motion.section>
   )
}
