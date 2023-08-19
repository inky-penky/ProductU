import Marquee from "react-fast-marquee"

export default function Slider() {
    return(
        <div className='mt-8 border-style-none md:block'>
            <Marquee className='py-2 bg-gradient-to-r from-blue-100 to-indigo-200'>
              <div className='mx-5 text-xl md:text-2xl'>
                <p className="m-0">Application open for Cohort 1</p>
              </div>
              <div className='mx-5 text-xl md:text-2xl'>
                <p className="m-0">Application open for Cohort 1</p>
              </div>
              <div className='mx-2 text-xl md:text-2xl'>
                <p className='m-0 text-green-600'>&#9679;</p>
              </div>
              <div className='mx-5 text-xl md:text-2xl'>
                <p className="m-0">Last date for enrollment - July 23</p>
              </div>
            </Marquee>
        </div>
    )
}