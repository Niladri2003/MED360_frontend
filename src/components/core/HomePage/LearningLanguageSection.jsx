import React from "react"

import Compare_with_others from "../../../assets/Images/Compare_with_others.svg"
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg"
import CTAButton from "../../../components/core/HomePage/Button"
import HighlightText from "./HighlightText"
import Testimonial from "./Testimonial"

const LearningLanguageSection = () => {
  return (
    <div>
      <div className="my-10 text-center text-4xl font-semibold">
        Golden reviews
        <HighlightText text={"what our patients says"} />
        <div className="mx-auto mt-3 text-center text-base font-medium leading-6 text-richblack-700 lg:w-[75%]">
          Explore the treasure trove of positive reviews that highlight the
          exceptional care and outcomes our patients have experienced
        </div>
        <Testimonial />
      </div>

      <div className="mx-auto -mt-5 mb-8 w-fit lg:mb-20">
        <CTAButton active={false} linkto={"/signup"}>
          <div className="">Learn More</div>
        </CTAButton>
      </div>
    </div>
  )
}

export default LearningLanguageSection
