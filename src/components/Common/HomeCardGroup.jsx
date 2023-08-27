import React from "react"

import BookingIcon from "../../assets/Icons/BookingIcon.png"
import ConsultIcon from "../../assets/Icons/consultIcon.png"
import Card from "./card/Card"

const HomeCardGroup = () => {
  return (
    <div className="mb-20 mt-10 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 flex-row gap-6">
      {/* Card */}
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={BookingIcon} className="h-10" />
        <p className="font-bold">Book Appointment</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={BookingIcon} className="h-10" />
        <p className="font-bold">Book Appointment</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={BookingIcon} className="h-10" />
        <p className="font-bold">Book Appointment</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={BookingIcon} className="h-10" />
        <p className="font-bold">Book Appointment</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={BookingIcon} className="h-10" />
        <p className="font-bold">Book Appointment</p>
      </div>
      <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
        <img src={BookingIcon} className="h-10" />
        <p className="font-bold">Book Appointment</p>
      </div>
      <Card cardtitle={"Hello"} cardIcon={ConsultIcon} />
    </div>
  )
}

export default HomeCardGroup
