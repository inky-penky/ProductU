import Data from "./data/learnData"

export default function ToLearn() {
    const course = Data.map((data, index)=>{
        return(
            <div>
                <div className="pl-10 m-0 p-6 pb-8 mb-6 w-[24rem] rounded-[1.5rem] bg-gradient-to-r from-blue-100 to-violet-100">
                <h1 className="m-0 mb-2 font-extralight text-md">{data.week}</h1>
                <h1 className="m-0 mb-4 w-auto font-semibold text-md">{data.title}</h1>
                <ul className="pl-5">
                    {
                        (data.courses).map((topic=>{
                            return(
                                <li className="m-0 mb-3 text-md font-extralight"><span className="text-blue-600">&#9679;  </span>{topic}</li>
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
        <section className="m-0 w-auto flex flex-col justify-between items-center">
            <h1 className="mb-20 font-semibold text-xl">What Will You Learn</h1>
            {course}
        </section>
    )
}