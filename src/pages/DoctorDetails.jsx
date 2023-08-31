import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Final_Checkout from "../components/core/Dashboard/PatientDashboard/Final_Checkout"
import DocShowCard from "../components/core/DocSection/DocShowCard"
import { apiConnector } from "../services/apiConnector"
import { courseEndpoints } from "../services/apis"

const DoctorDetails = () => {
  const { doctorid } = useParams() // Get the doctorid from the URL
  const [doctorDetails, setDoctorDetails] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        console.log("Doc ID", doctorid)
        const reslt = await apiConnector(
          "POST",
          courseEndpoints.GET_DOC_FULL_DETAILS,
          { doctorid }
        )
        setDoctorDetails(reslt.data.data)
        setIsLoading(false) // Set loading to false after fetching

        console.log(reslt.data)
      } catch (error) {
        console.log("Could not fetch doctor details.", error)
        setIsLoading(false) // Handle error by setting loading to false
      }
    }

    fetchDoctorDetails()
    console.log(doctorDetails)
  }, [doctorid])

  return (
    <div>
      {isLoading ? (
        <p>Loading doctor details...</p>
      ) : (
        <Final_Checkout
          doctorDetails={doctorDetails}
          doctorUsrId={doctorDetails.Doctor._id}
        />
      )}
    </div>
  )
}

export default DoctorDetails
