import React from "react"
import Health_card from "./Health_card";

const HealtRecords = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-x-10 lg:gap-y-6  md:gap-y-4 gap-y-4
    ">
      <Health_card/>
      <Health_card/>
      <Health_card/>
      <Health_card/>
      <Health_card/>
      <Health_card/>
      <Health_card/>
      <Health_card/>
    </div>
  )
}

export default HealtRecords
