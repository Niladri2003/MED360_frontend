import hero_img2 from "../assets/Images/hero_gif2.gif"
import hero_img from "../assets/Images/hero_gif.gif"
// Component Imports
import Footer from "../components/Common/Footer"
import HomeCardGroup from "../components/Common/HomeCardGroup"
import Slider from "../components/Slider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"

function Home() {
  return (
    <div>
      {/* Section 1 */}
      <Slider />
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        <p className="mt-8 text-2xl font-bold">Trending section</p>
        <div className="h-[1px] w-full bg-white"></div>
        <HomeCardGroup />

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Your New Smile
          <HighlightText text={"Starts From Here"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-white">
          Your journey to a healthier smile begins right here. With our online
          doctor consultation app, you can access expert advice and personalized
          care from the comfort of your home.Take the first step towards a
          brighter, healthier you by connecting with experienced doctors through
          our user-friendly online platform.
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

        {/* Code Section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"Your Health journey today"} />
              </div>
            }
            subheading={
              "In no impression assistance contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure ."
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
          />
        </div>

        {/* Explore Section */}
        {/* <ExploreMore /> */}
      </div>

      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          <LearningLanguageSection />
        </div>
      </div>

      {/* Section 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"></div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Home
