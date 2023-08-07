import { priceLists } from '../components/pricelists'
import Image from 'next/image'
import Flyout from '../public/vectors/svg/Frame (1).svg'
import Correct from '../public/vectors/images/correct.png'
import Remove from '../public/vectors/images/remove.png'



const Pricing = () => {
  
  return (
    <div className="w-full h-full">
        <div className="w-full bg-center bg-cover h-[5.8rem] lg:h-[20rem] bg-pricing">
          <div className="w-full h-[5.8rem] lg:h-[20rem] bg-white/80 flex lg:gap-10 flex-col items-center justify-center gap-1">
            <div className="flex flex-col items-center justify-center gap-1 text-center lg:gap-8">
              <h2 className="font-bold lg:text-[2rem] text-xs">Schedule a 1:1 meeting with Our Consultant team</h2>
              <p className="lg:text-[1.2rem] text-xs ">Get a chance to interact with the team before enrolling
                on the program.
              </p>
            </div>
            <div className="flex items-center justify-center text-center">
              <div className="lg:py-3 text-white bg-blue-900 rounded-lg lg:px-7 lg:text-[1.1rem] text-xs py-1 px-2">Book now</div>
            </div>
          </div>
        </div>
        
        <div className="my-[2rem] lg:my-[5rem] w-full">
          <div className='pb-5 lg:pb-10' >
            <h1 className='text-center text-[1.5rem] lg:text-[2.5rem] '>Programme Fees</h1>
          </div>
          <div className='flex flex-col justify-center gap-10 lg:gap-5 lg:flex-row'>
            {priceLists.map((list, index) => (
              <div className='flex flex-col items-center gap-5' key={index}>
                <div className='text-[1.1rem] font-semibold flex w-[14.5rem] justify-center gap-2 py-2  text-blue-900 bg-blue-300 rounded-lg shadow-lg lg:py-3 shadow-gray-300 lg:w-[16.7rem]'>
                  <p className=''>{list.package}</p>
                  <Image src={Flyout} alt='' />
                </div>
                <div className='flex flex-col items-start justify-start gap-4 px-2 py-5 rounded-xl shadow-lg shadow-gray-300 lg:px-2 w-[14.4rem] lg:w-[16.6rem]'>
                  {list.description.map((desc, index) => (
                    <div className='flex items-center gap-2' key={index}>
                      {desc.status? <div className='w-4'>
                        <Image src={Correct} alt='' />
                      </div>: <div className='w-4'>
                        <Image src={Remove} alt=''/>
                      </div>}
                      <p className='text-[1.1rem]'>{desc.info}</p>
                    </div>
                  ))}
                </div>
              </div>
              
            ))}
          </div>
        </div>
    </div>
  )
}

export default Pricing