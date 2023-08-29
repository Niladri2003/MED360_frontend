import React, { useEffect, useState } from "react"
import { get } from "react-hook-form"

// import profile from "../components/core/DocSection/profile"
import Final_Checkout from "../components/core/Dashboard/PatientDashboard/Final_Checkout"
import Doccard from "../components/core/DocSection/Doccard"
import { apiConnector } from "../services/apiConnector"
import { courseEndpoints } from "../services/apis"
// import DocShowCard from "../components/core/DocSection/DocShowCard"
import { getAllDoctors } from "../services/operations/doctorDetailsAPI"

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true) // Add loading state

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const reslt = await apiConnector(
          "GET",
          courseEndpoints.GET_ALL_DOCTORS_API
        )
        setDoctors(reslt.data.data)
        console.log(reslt)
        setLoading(false) // Set loading to false after fetching
      } catch (error) {
        console.log("Could not fetch Doctors.", error)
        setLoading(false) // Handle error by setting loading to false
      }
    }

    fetchDoctors()
  }, [])

  return (
    <div className=" mx-auto mb-3 mt-10 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 rounded-md border-[1px] py-4 text-white">
      {loading ? ( // Show loading screen while loading
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-4 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {doctors.length > 0 ? (
            doctors.map((doctor) => (
              <Doccard key={doctor.id} doctor={doctor} img={doctor} />
            ))
          ) : (
            <p>No doctors available</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Doctors

{
  /* {doctors.map((doctor, idx) => (
        <Doccard key={idx} />
      ))} */
}
