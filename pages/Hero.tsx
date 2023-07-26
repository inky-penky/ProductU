import React from "react";

export default function Hero() {
    return(
      <section className="bg-hero bg-contain w-auto h-auto pt-16">
      <div className="h-36 flex justify-between flex-col">
        <div className="flex justify-center text-center">
          <div className="w-[350px] font-semibold m-0 text-darkblue text-2xl flex self-center tracking-wider md:w-[400px]">Become A Prduct Manager In 12 Weeks</div>
        </div>
      <p className="w-fit m-0 relative font-semibold font-sans top-4 text-lg tracking-wider lg: flex justify-center self-center">No Prior Experience required *</p>
      <button className="w-56 relative top-10 p-3 font-bold rounded-3xl m-0 font-mono bg-gradient-to-r from-cyanblue to-darkblue  text-white md: flex justify-center self-center md:-mb-4">Apply for Program</button>
      </div>
      <div className="flex justify-center">
      <div className="w-64 p-10 pl-16 pb-8 relative m-0 mt-28 mb-6 bg-slate rounded-[70px] md:pb-6 md:rounded-[300px] md:w-auto">
          <div className="flex flex-col justify-center content-center md: w-fit md:flex-row md:justify-around">
          <div className="w-36 mr-0 pr-8 mb-6 md:w-auto">
            <h3 className="font-bold font-sans">Live</h3>
            <p className="text-xs">Sessions on Zoom</p>
          </div>
          <div className="w-auto mr-0 mb-6 md:w-auto md:px-5">
            <h3 className="font-bold pr-8">6 to 12 Weeks</h3>
            <p className="text-xs">Program Timeline</p>
          </div>
            <div className="w-auto mr-0 mb-6 md:w-auto md:px-5">
            <h3 className="font-bold font-sans pr-8">Mentorship</h3>
            <p className="text-xs">With experience PMs</p>
          </div>
          <div className="w-auto mr-0 md:w-auto md:px-5">
            <h3 className="font-bold font-sans pr-8">Placement</h3>
            <p className="text-xs">Support for 1 year</p>
          </div>
        </div>
      </div>
      </div>
      </section>
    )
}
