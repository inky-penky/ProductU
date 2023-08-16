import Image from "next/image"
import Data from "./data/learnData"

export default function ToLearn() {
    const course = Data.map((data, index)=>{
        return(
            <div key={data.id}>
                <div className="tracking-wider pl-5 mx-[1rem] p-[1.3rem] pb-8 mb-7 w-[20rem] h-[16.35rem] rounded-[1.5rem] bg-gradient-to-r from-blue-100 to-violet-100 md:w-[15.35rem] md:h-[18.35rem] md:mx-[0.35rem]">
                <h1 className="m-0 mb-2 font-extralight text-sm">{data.module}</h1>
                <h1 className="m-0 mb-4 w-full font-semibold text-sm">{data.title}</h1>
                <ul className="pl-2">
                    {
                        (data.courses).map((topic =>{
                            return(
                                <li key={topic.id} className="m-0 mb-1 text-xs font-extralight">{topic.name}</li>
                            )
                            }))
                    }
                </ul>
                <div className="border-t-2 border-gray-500 w-full mt-[2rem]">
                    {data.tag}
                    <div className="mt-[0.5rem] w-[11.2rem] flex justify-between">
                        {(data.caseStudy).map((logo =>{
                            return(
                                <div><Image src={logo} alt="logo" width={65}/></div>
                            )
                        }))}
                    </div>
                </div>
                </div>
            </div>
        )
    })
    return(
        <section className="flex flex-col justify-between items-center m-0 mt-[7.25rem] w-full">
            <h1 className="mb-[3rem] font-semibold text-center text-xl">What Will You Learn</h1>
            <div className="flex flex-col justify-between items-center md:grid md:grid-cols-3 md:-gap-x-[1.5rem]">
            {course}
            </div>
        </section>
    )
}
