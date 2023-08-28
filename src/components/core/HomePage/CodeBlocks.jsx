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
    <div className={`my-20 flex flex-row justify-between gap-10 lg:gap-10`}>
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

      <img className="hero_pic h-[350px] w-[450px]" src={image1} />

      <img className="hero_pic" src={image2} />

      {/* Section 2 */}
      {/* <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]"> */}
      {/* {backgroundGradient} */}
      {/* Indexing */}
      {/* <div className="text-center flex flex-col   w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div> */}

      {/* Codes */}
      {/* <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}
        >
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default CodeBlocks
