import React from "react"

import BannerImage1 from "../assets/Images/About_1.jpg"
import BannerImage2 from "../assets/Images/About_2.jpg"
import BannerImage3 from "../assets/Images/About_3.jpg"
import OurMission from "../assets/Images/Mission_img.jpg"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      <section className="bg-[#0e3239ce]">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-3xl font-semibold lg:w-[70%]">
            Discover Our Health Revolution: Redefining Care and Convenience
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-lg font-medium text-richblack-300 lg:w-[95%]">
              Welcome to MED360, your trusted online platform for convenient and
              efficient healthcare services. At MED360, we're dedicated to
              revolutionizing the way you access medical care, making it simpler
              and more accessible than ever before.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[40%] grid-cols-3 gap-3 lg:gap-5">
            <img
              src={BannerImage1}
              alt=""
              className="h-[311px] w-[380px] rounded-lg object-cover"
            />
            <img src={BannerImage2} alt="" className="rounded-lg" />
            <img src={BannerImage3} alt="" className="h-[311px] rounded-lg" />
          </div>
        </div>
      </section>

      {/* <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section> */}
      <div className="h-[100px]"></div>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-2 text-richblack-500">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="my-24 flex flex-col gap-10 lg:w-[50%]">
              <h1 className="bg-clip-text text-4xl font-semibold text-transparent text-white lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-[#beb6b6] lg:w-[95%]">
                Our mission is to bridge the gap between patients and healthcare
                professionals, ensuring that quality medical assistance is just
                a few clicks away. We understand the importance of timely
                medical attention, and we're committed to providing a seamless
                experience that prioritizes your health and well-being.
              </p>
              <p className="text-base font-medium text-[#beb6b6] lg:w-[95%]">
                With our intuitive search functionality, you can easily discover
                experienced and highly qualified doctors specializing in various
                medical fields. Whether you're seeking a specialist for a
                specific condition or a general practitioner, we have a diverse
                range of healthcare professionals to choose from.
              </p>
            </div>

            <div>
              <img
                src={OurMission}
                alt=""
                className="h-80 shadow-[0_0_20px_0] shadow-white"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-10">
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-clip-text text-4xl font-semibold text-transparent text-white lg:w-[70%] ">
                Find the Right Doctor
              </h1>
              <p className="text-base font-medium text-[#beb6b6] lg:w-[95%]">
                With our intuitive search functionality, you can easily discover
                experienced and highly qualified doctors specializing in various
                medical fields. Whether you're seeking a specialist for a
                specific condition or a general practitioner, we have a diverse
                range of healthcare professionals to choose from.
              </p>
            </div>
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-clip-text text-4xl font-semibold text-transparent text-white lg:w-[70%] ">
                Book Appointments Online
              </h1>
              <p className="text-base font-medium text-[#beb6b6] lg:w-[95%]">
                No more waiting on hold or dealing with complex appointment
                scheduling. Our platform allows you to book appointments with
                your preferred doctors at your convenience. Simply select the
                time slot that works best for you, and you're all set.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-10">
            <div className="my-4 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-clip-text text-4xl font-semibold text-transparent text-white lg:w-[70%] ">
                Effortless Health Checkups
              </h1>
              <p className="text-base font-medium text-[#beb6b6] lg:w-[95%]">
                With our intuitive search functionality, you can easily discover
                experienced and highly qualified doctors specializing in various
                medical fields. Whether you're seeking a specialist for a
                specific condition or a general practitioner, we have a diverse
                range of healthcare professionals to choose from.
              </p>
            </div>
            <div className="my-24 flex flex-col gap-10 lg:w-[40%]">
              <h1 className="bg-clip-text text-4xl font-semibold text-transparent text-white lg:w-[70%] ">
                Secure and Private Video Consult
              </h1>
              <p className="text-base font-medium text-[#beb6b6] lg:w-[95%]">
                No more waiting on hold or dealing with complex appointment
                scheduling. Our platform allows you to book appointments with
                your preferred doctors at your convenience. Simply select the
                time slot that works best for you, and you're all set.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        {/* <LearningGrid />
        <ContactFormSection /> */}
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"></div>
      <Footer />
    </div>
  )
}

export default About
