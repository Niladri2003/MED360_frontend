import React from "react"

import DocShowCard from "../components/core/DocSection/DocShowCard"

const Doctors = () => {
  return (
    <div className=" mx-auto mb-3 mt-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 rounded-md border-[1px] p-2 text-white">
      <DocShowCard />
    </div>
  )
}

export default Doctors
