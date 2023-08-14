import { faq } from '../components/data/faq'
import { useState } from 'react'




const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const toggleExpand = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1)
        }else {
            setExpandedIndex(index)
        }
      };

  return (
    <div className="flex flex-col items-center mb-[3rem] lg:my-[5rem]">
        <div className="mb-5 lg:mb-10">
            <h1 className=" lg:text-[2.5rem] font-medium text-[1.5rem]">Frequently asked questions</h1>
        </div>
        {faq.map((faq, index) => (
            <div className="flex flex-col items-center gap-2" key={index}>
                <div className='' >
                    <h4 className="text-center py-2 bg-blue-200 rounded-lg lg:px-20 lg:text-[1.4rem] text-[1.1rem] w-[17.5rem] lg:w-[40rem] cursor-pointer" onClick={() => toggleExpand(index)}>
                        {faq.question}
                    </h4>
                </div>
                <div className='' >
                    {expandedIndex === index && <p className="lg:text-[1.3rem] text-[1.05rem] text-left lg:text-left bg-white p-4 rounded-lg shadow-gray-300 shadow-xl w-[17.5rem] lg:w-[40rem] mb-5 lg:mb-[5rem]">
                        {faq.answer}
                    </p>}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Faq