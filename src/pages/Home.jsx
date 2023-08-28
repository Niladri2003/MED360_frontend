// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import hero_img from "../assets/Images/hero_gif.gif"
import hero_img2 from "../assets/Images/hero_gif2.gif"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/Common/Footer"
import HomeCardGroup from "../components/Common/HomeCardGroup"
import ReviewSlider from "../components/Common/ReviewSlider"
import Slider from "../components/Slider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/Timeline"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <Slider />
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        {/* <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link> */}
        <p>Trending section</p>
        <HomeCardGroup />

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Your New Smile
          
          <HighlightText text={"Starts From Here"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        Your journey to a healthier smile begins right here. With our online doctor consultation app, you can access expert advice and personalized care from the comfort of your home.Take the first step towards a brighter, healthier you by connecting with experienced doctors through our user-friendly online platform.
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* Video */}
        {/* <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div> */}

        {/* Code Section 1  */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Meet with our our  <HighlightText text={"Co-Founder"} /> Arnab Maity
              </div>
            }
            subheading={
              "Highly experienced and motivated Co Founder with a track record of success in business management. Proven ability to develop and execute strategies to drive growth and profitability."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}

            image1={hero_img}

          />
        </div>

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}

            image2={hero_img2}

          // codeColor={"text-white"}
          // codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
          // backgroundGradient={<div className="codeblock2 absolute"></div>}


          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Steps to be followed to {" "}
              <br/>
              <HighlightText text={" sign up "} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* Timeline Section - Section 2 */}
          <TimelineSection />

          {/* Learning Language Section - Section 3 */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        {/* <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider /> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home


