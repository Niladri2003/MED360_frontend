import React from "react"

import BookingIcon from "../../assets/Icons/BookingIcon.png"
import video from "../../assets/Icons/video.svg"
import help from "../../assets/Icons/help.svg"
import fees from "../../assets/Icons/fees.svg"
import pdf from "../../assets/Icons/pdf.svg"
import figma from "../../assets/Icons/figma.svg"
import signup from "../../assets/Icons/signup.svg"
import emergency from "../../assets/Icons/emergency.svg"

import Card from "./card/Card"

const HomeCardGroup = () => {
  return (
    <div className="mb-20 mt-10 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 flex-row gap-6">
      {/* Card */}
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={help} className="h-10" />
        <p className="font-bold">24/7 Access to Doctors</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={fees} className="h-10" />
        <p className="font-bold">Affordable Fees</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={pdf} className="h-10" />
        <p className="font-bold">Prescription Facility</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={figma} className="h-10" />
        <p className="font-bold">Easy user interfac</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={signup} className="h-10" />
        <p className="font-bold">Sign up to see more</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={emergency} className="h-10" />
        <p className="font-bold">Emergency specialist</p>
      </div>
      <Card cardtitle={"Secure Video Consultations"} cardIcon={video} />
    </div>
  )
}

export default HomeCardGroup
