import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { carousel } from './data/carousel'
import Image from "next/image";




export const Carousel = () =>{
    const settings = {
        dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 0,
          cssEase: "linear",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    
    return (
        <div className="flex flex-col py-5">
            <Slider {...settings}>
            {carousel.map((item, index) => (
                <div className="flex pl-5 lg:pl-10" key={index}>
                    <div className="flex flex-col items-center gap-5 text-center border-4 border-blue-100 h-[24rem] pt-5 lg:h-[28.5rem] lg:pt-10 rounded-xl">
                        <div className="">
                            <Image src={item.icon} width={100} height={1} alt="" />
                        </div>
                        <div className="flex flex-col items-center gap-5">
                            <h1 className="font-semibold text-[1.5rem] lg:text-[2rem] w-[12.5rem] lg:w-[16rem]">{item.header}</h1>
                            <p className="text-sm lg:text-[1.3rem] w-[15rem] lg:w-[18rem] leading-7">{item.info}</p>
                        </div>
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    )
}
