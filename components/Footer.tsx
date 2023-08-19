





const Footer = () => {
  return (
    <div className="w-full bg-black">
        <div className="lg:mx-[12rem] mx-[3rem]">
            <div className="flex gap-[5rem] py-[2.5rem] lg:py-[4rem] border-b border-gray-300 flex-col lg:flex-row">
                <div className="flex flex-col gap-2">
                    <h3 className="text-white">ProductU</h3>
                    <a href='#courses' className='text-blue-500'>Course Details</a>
                    <a href='#whyUs' className='text-blue-500'>Why Us?</a>
                    <a href='#pricing' className='text-blue-500'>Pricing</a>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-white">Wanna know more?</h3>
                    <a href='#contact' className='text-blue-500'>Contact</a>
                </div>
            </div>
            <div className="py-5">
                <p className="text-sm text-gray-300">© Product U</p>
            </div>
        </div>
    </div>
  )
}

export default Footer