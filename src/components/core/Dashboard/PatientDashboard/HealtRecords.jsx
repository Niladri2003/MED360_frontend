import React from "react"
import Health_card from "./Health_card";
import Upload_form from "./Upload_form";

const HealtRecords = () => {
  return (
    <div className="flex flex-row gap-3 ">
      <div className="grid grid-cols-1  md:grid-cols-2 w-[70%]   lg:gap-y-4  md:gap-y-2 gap-y-4
    ">
        <Health_card />
        <Health_card />
        <Health_card />
        <Health_card />
        <Health_card />
        <Health_card />   
        <Health_card />
        <Health_card />
      </div>
      <div className=" bg-richblack-300 w-[30%]  h-[150px] rounded-lg flex  items-center ">
        <Upload_form />
      </div>
    </div>
  )
}

export default HealtRecords
