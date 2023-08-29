import React from "react"
import { AiOutlineUser } from "react-icons/ai"
import { GrLanguage } from "react-icons/gr"
import { MdOutlineCastForEducation } from "react-icons/md"

import Profile from "../../../assets/Images/profile.jpg"

const DocShowCard = ({ doctorDetails }) => {
  return (
    <div className="mt-16 flex w-11/12 flex-col items-start justify-around text-white">
      <div className="flex w-full flex-row items-start justify-around">
        <div className="flex flex-col items-start">
          <p className="text-2xl">{`${doctorDetails.Docpublicname}`}</p>
          <div className="h-[1px] w-[300px] bg-white"></div>
          <div className="flex flex-row items-start p-2">
            <p>{`${doctorDetails.category.name}`}</p>
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
              <p>{`${doctorDetails.Education}`}</p>
            </div>
            {/* Registration Number */}

            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <AiOutlineUser size={27} />
                <p className="text-sm">Registration Number</p>
              </div>
              <p>{`${doctorDetails.DocRegno}`}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 p-2">
            <div className="flex  items-start gap-2">
              <GrLanguage size={27} color="white" />
              <p className="text-sm">Languages</p>
            </div>
            <p>{`${doctorDetails.Language}`}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <img
            src={`${doctorDetails.Doctor.image}`}
            className="h-[200px] rounded-md"
          />
          <button className="rounded-md border-[1px] border-white p-4">
            Book Appointment
          </button>
        </div>
      </div>
      <div className="h-[1px] w-11/12 bg-white"></div>

      <div>Description</div>
    </div>
  )
}

export default DocShowCard
