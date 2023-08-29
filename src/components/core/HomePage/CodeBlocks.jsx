import React from "react"
import { FaArrowRight } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"

import CTAButton from "./Button"

const CodeBlocks = ({
  image1,
  image2,

  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  // hero_img,
  // hero_img2
}) => {
  return (
    <div
      className={`my-20 flex flex-row items-center justify-around gap-2 lg:gap-10`}
    >
      {/* Section 1  */}
      <div className="flex w-[100%] flex-col gap-8 lg:w-[50%]">
        {heading}

        {/* Sub Heading */}
        <div className="-mt-3 w-[85%] text-base font-bold text-white">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="mt-7 flex gap-7">
          <CTAButton active={false} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      <img className="hero_pic" src={image2} />
    </div>
  )
}

export default CodeBlocks
