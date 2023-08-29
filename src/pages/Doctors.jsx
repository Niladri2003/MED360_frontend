import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import Doccard from "../components/core/DocSection/Doccard"
import { apiConnector } from "../services/apiConnector"
import { courseEndpoints } from "../services/apis"
import { getAllDoctors } from "../services/operations/doctorDetailsAPI"
import { setdoctorData } from "../slices/doctorsSlice"

const Doctors = () => {
  const dispatch = useDispatch()
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true) // Add loading state
  const DoctorData = useSelector((state) => state.doctor.doctorData)
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const reslt = await apiConnector(
          "GET",
          courseEndpoints.GET_ALL_DOCTORS_API
        )
        setDoctors(reslt.data.data)
        dispatch(setdoctorData(reslt.data.data))
        setLoading(false)
      } catch (error) {
        console.log("Could not fetch Doctors.", error)
        setLoading(false)
      }
    }
    dispatch(getAllDoctors)
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
              <Link key={doctor.id} to={`/doctordetails/${doctor._id}`}>
                <Doccard doctor={doctor} />
              </Link>
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
