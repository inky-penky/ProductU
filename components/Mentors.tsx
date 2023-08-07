import Data from "./data/MentorData"
import Image from "next/image"
import Alex from "./mentorImage/Alex.png"
import Plum from "./mentorImage/AlexComp.png"
import Micro from "./mentorImage/Microsoft.png"

export default function Mentors() {
    const Lecturers = Data.map((Mentor, index)=>{
        return(
                <div className="mb-3 border-2 border-blue-100 p-5 px-12 rounded-xl flex flex-col justify-center">
                    <div className="mb-14">
                        <Image className=" border-teal-100 border-[18px] rounded-full relative left-3" src={Mentor.image} alt="" width={130}></Image>           
                    </div>
                    <h1 className="tracking-wider relative left-9 font-bold text-xl mb-6">{Mentor.name}</h1>
                    <p className="relative left-9 text-md mb-6">{Mentor.title}</p>
                    <div className="relative left-7">
                        <Image src={Mentor.compImage} alt=""></Image>
                    </div>
                </div>
        )
    })
    return(
        <section className="w-full flex justify-center">
            <div className="flex flex-col justify-between">
                <h1 className="relative left-16 mb-8 font-Bold text-lg">Meet the Mentors!</h1>
                {Lecturers}       
            </div>
        </section>
    )
}