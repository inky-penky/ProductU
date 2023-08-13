import Data from "./data/MentorData"
import Image from "next/image"


export default function Mentors() {
    const Lecturers = Data.map((Mentor, index)=>{
        return(
                <div key={index} className="w-[18rem] h-[25.5rem] mb-4 border-2 shadow-md shadow-indigo-100 border-blue-50 py-[2rem] px-12 rounded-[1.5rem] flex flex-col justify-center md:m-[0.5rem] md:mb-[3rem] md:w-auto">
                    <div className="mb-14 flex justify-items-center">
                        <Image className="border-teal-100 border-[1rem] rounded-full" src={Mentor.image} alt="" width={130}></Image>           
                    </div>
                    <div className="flex flex-col justify-items-center place-items-center">
                        <h1 className="tracking-wide text-center font-normal text-md mb-6 md:w-full">{Mentor.name}</h1>
                        <p className="text-center text-sm mb-6">{Mentor.title}</p>
                        <div className="">
                            <Image src={Mentor.compImage} alt=""></Image>
                        </div>
                    </div>
                </div>
        )
    })
    return(
        <section className="w-full mt-[8rem] mb-[4rem]">
            <h1 className="text-center mb-[3rem] mt-[2rem] font-bold text-xl">Meet the Mentors!</h1>
            <div className="w-full flex flex-col justify-items-center place-items-center md:grid md:grid-cols-3 md:-gap-x-[5rem]">
                {Lecturers}       
            </div>
        </section>
    )
}
