import Image from "next/image"
import ama from "../public/vectors/images/Amazon.png"
import micro from "../public/vectors/images/Microsoft.png"
import google from "../public/vectors/images/Google.png"
import tweet from "../public/vectors/images/Twitter.png"
import meta from "../public/vectors/images/Meta.png"
export default function Productize() {
    return(
        <section>
            <h1 className="font-bold text-center m-0 mb-24 text-2xl">Product<span className="text-neutral-500">ize </span>U<span className="text-neutral-500 font-semibold">'rself and <br /> <br /> Land Your Dream Job in Top Companies</span></h1>
            <div className="w-auto h-auto flex flex-col items-center justify-around mb-12 md:flex md:flex-row md:left-0">
                <div className="mb-8">
                    <Image src={ama} alt="Amazon Logo" width={150}>
                    </Image>
                </div>
                <div className="mb-8">
                    <Image src={micro} alt="Microsoft Logo" width={150}>
                    </Image>
                </div>
                <div className="mb-8">
                    <Image src={google} alt="Google Logo" width={150}>
                    </Image>
                </div>
                <div className="mb-8">
                    <Image src={meta} alt="Meta Logo" width={150}>
                    </Image>
                </div>
                <div className="mb-8">
                    <Image src={tweet} alt="Twitter Logo" width={150}>
                    </Image>
                </div>
            </div>
            <div className="w-auto flex-col justify-between text-blue-800 md:flex md:flex-row md:-mb-[7.5rem] md:justify-around">
                <div className="mb-16 text-center">
                    <h1 className="text-3xl mb-4">$1,23,000</h1>
                    <p className="text-md mb-2 md:w-[8.5rem]">Average Salary for PM</p>
                    <p className="text-sm">(Acc to Glassdoor)</p>
                </div>
                <div className="mb-16 text-center">
                    <h1 className="text-3xl mb-4">30%</h1>
                    <p className="text-md mb-2 md:w-[11rem]">YOY growth of PM Salaries</p>
                    <p className="text-sm">(Acc to Globenewswire)</p>
                </div>
                <div className=" mb-24 text-center">
                    <h1 className="text-3xl mb-4">30k+</h1>
                    <p className="text-md mb-2 md:w-[11rem]">Job roles across PM roles in 2023</p>
                    <p className="text-sm">(Acc to Linkedln)</p>
                </div>
            </div>
        </section>
    )
}
