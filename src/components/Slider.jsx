import { MdBiotech } from "react-icons/md"
import { PiPlugsConnectedLight } from "react-icons/pi"
import { TbReportAnalytics } from "react-icons/tb"
import {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "./styles.css"
// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Link } from "react-router-dom"

//import Img1 from "../assets/Images/SliderImages/slide_4.webp"
//import Img2 from "../assets/Images/SliderImages/slider_2.webp"
//import Img3 from "../assets/Images/SliderImages/slider_3.webp"
const Img1="https://res.cloudinary.com/dvbnkndyc/image/upload/v1707072257/tvirf48l1umd8drjc2ub.webp";
const Img3="https://res.cloudinary.com/dvbnkndyc/image/upload/v1707072257/oxdlrenoef3mrtdm3kit.webp";
const Img2="https://res.cloudinary.com/dvbnkndyc/image/upload/v1707072257/y4jnqkb3n0ihkjxnczlb.webp";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      slidesPerView={1}
      spaceBetween={25}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      //   loop={true}
      navigation
      freeMode={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
      modules={[FreeMode, Pagination, Autoplay, Navigation]}
      prevButton={<div className="swiper-button-prev"></div>}
      nextButton={<div className="swiper-button-next"></div>}
      className="w-full "
    >
      <SwiperSlide>
        <div className="relative">
          <img src={Img1} fetchpriority={"high"} className="-z-10 h-[700px] w-full object-cover" alt={"Slider Image"} loading={"lazy"}/>
          <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform gap-x-1 pb-2  font-bold text-white">
            <p className="pb-2 text-4xl">

              Your Journey to Better Health Starts Here
            </p>
            <Link to={"/signup"}>
              <button className="rounded-md border-[1px] p-2 hover:bg-blue-100 hover:text-white">
                Book Your Appointment Today
              </button>
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={Img2} className="h-[700px] w-full object-cover" alt={"Slider Image"} loading={"lazy"}/>
        <div className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform gap-x-1 pb-2  font-bold text-white">
            <p className="pb-2 text-4xl">

              Most trusted health services
            </p>
            <Link to={"/signup"}>
              <button className="rounded-md border-[1px] p-2 hover:bg-blue-100 hover:text-white">
                Sign Up
              </button>
            </Link>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src={Img3} className="h-[700px] w-screen object-cover" alt={"Slider Image"} loading={"lazy"}/>
          <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 transform ml-10  pb-2 font-bold text-white">
            <p className="pb-2 text-4xl"> Accessible Healthcare Anywhere</p>
            <div className="mb-2 mt-2 flex flex-row items-center gap-2">
              <MdBiotech size={27} />
              <p className="text-lg">Access your health records anywhere</p>
            </div>
            <div className="mb-2 mt-2 flex flex-row items-center gap-2">
              <TbReportAnalytics size={27} />
              <p className="text-lg">Ai enabaled report analysis</p>
            </div>
            <div className="mb-2 mt-2 flex flex-row items-center gap-2">
              <PiPlugsConnectedLight size={27} />
              <p className="text-lg">Connect with our experts</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider
