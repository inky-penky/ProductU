import Data from "./data/learnData"

export default function ToLearn() {
    const course = Data.map((data, index)=>{
        return(
            <div key={data.id}>
                <div className="tracking-wider pl-5 mx-[1rem] p-6 pb-8 mb-6 w-[18rem] rounded-[1.5rem] bg-gradient-to-r from-blue-100 to-violet-100">
                <h1 className="m-0 mb-2 font-extralight text-sm">{data.week}</h1>
                <h1 className="m-0 mb-4 w-full font-semibold text-sm">{data.title}</h1>
                <ul className="pl-2">
                    {
                        (data.courses).map((topic=>{
                            return(
                                <li key={topic.id} className="m-0 mb-3 text-sm font-extralight"><span className="text-blue-600">&#9679;  </span>{topic.name}</li>
                            )
                            }))
                    }
                </ul>
                <h1 className="font-semibold pl-5">{data.Assignment}</h1>
                </div>
            </div>
        )
    })
    return(
        <section className="flex flex-col justify-between items-center m-0 mt-[10.5rem] w-full">
            <h1 className="mb-[4.5rem] font-semibold text-center text-xl">What Will You Learn</h1>
            <div className="flex flex-col justify-between items-center md:grid md:grid-cols-2 md:-gap-x-[3rem]">
            {course}
            </div>
        </section>
    )
}
