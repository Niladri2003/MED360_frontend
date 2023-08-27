import React from "react"
import Doccard from "../components/core/DocSection/Doccard"
// import profile from "../components/core/DocSection/profile"
import Final_Checkout from "../components/core/Dashboard/PatientDashboard/Final_Checkout"

// import DocShowCard from "../components/core/DocSection/DocShowCard"

const Doctors = () => {
  return (
    <div className=" mx-auto mb-3 mt-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 rounded-md border-[1px] py-4 text-white">
    {/* <Doccard/> */}
    <Final_Checkout/>
    </div>
  )
}

export default Doctors
