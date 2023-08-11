import Data from "./data/MentorData"
import Image from "next/image"

export default function Mentors() {
    const Lecturers = Data.map((Mentor, index)=>{
        return(
                <div key={Mentor.id} className="w-[18rem] mb-4 border-2 shadow-md shadow-indigo-100 border-blue-100 p-5 px-12 rounded-[3rem] flex flex-col justify-center">
                    <div className="mb-14 flex justify-items-center">
                        <Image className="border-teal-100 border-[1rem] rounded-full" src={Mentor.image} alt="" width={130}></Image>           
                    </div>
                    <div className="flex flex-col justify-items-center place-items-center">
                        <h1 className="tracking-wider text-center font-bold text-xl mb-6">{Mentor.name}</h1>
                        <p className="text-center text-md mb-6">{Mentor.title}</p>
                        <div className="">
                            <Image src={Mentor.compImage} alt=""></Image>
                        </div>
                    </div>
                </div>
        )
    })
    return(
        <section className="w-full">
            <div className="w-full flex flex-col justify-items-center place-items-center">
                <h1 className="text-center mb-8 font-bold text-lg">Meet the Mentors!</h1>
                {Lecturers}       
            </div>
        </section>
    )
}
