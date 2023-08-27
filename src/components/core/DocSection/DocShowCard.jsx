import React from "react"
import { AiOutlineUser } from "react-icons/ai"
import { GrLanguage } from "react-icons/gr"
import { MdOutlineCastForEducation } from "react-icons/md"

import Profile from "../../../assets/Images/profile.jpg"

const DocShowCard = () => {
  return (
    <div className="flex w-full flex-col items-start justify-around">
      <div className="flex w-full flex-row items-start justify-around">
        <div className="flex flex-col items-start">
          <p className="text-2xl">Niladri Adak</p>
          <div className="h-[1px] w-[300px] bg-white"></div>
          <div className="flex flex-row items-start p-2">
            <p>DERMATOLOGY</p>
            <div className="ml-6 mr-6 h-[25px] w-[1px] bg-white"></div>
            <p>12 Years</p>
          </div>
          <div className="h-[1px] w-[300px] bg-white"></div>

          {/* Details */}
          <div className="mt-5 flex flex-row gap-28 p-2">
            {/* Education */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <MdOutlineCastForEducation size={27} />
                <p className="text-sm">Education</p>
              </div>
              <p>MBBS, MD(DVL)</p>
            </div>
            {/* Registration Number */}

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <AiOutlineUser size={27} />
                <p className="text-sm">Registration Number</p>
              </div>
              <p>UG8068</p>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <GrLanguage size={27} color="white" />
            <p className="text-sm">Languages</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <img src={Profile} className="rounded-md" />
          <button className="rounded-md border-[1px] border-white p-4">
            Book Appointment
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full"></div>
      <div></div>
    </div>
  )
}

export default DocShowCard
