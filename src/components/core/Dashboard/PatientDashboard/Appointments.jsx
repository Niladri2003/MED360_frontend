import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { apiConnector } from "../../../../services/apiConnector"
import { courseEndpoints } from "../../../../services/apis"
import Vdo_joinCard from "./Vdo_joinCard"

const Appointments = () => {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  useEffect(() => {
    const userId = user._id
    console.log("USERID", userId) // Replace with the actual user ID

    const res = apiConnector(
      "POST",
      courseEndpoints.GET_ALL_APOINTMENTS,
      {
        userId,
      },
      {
        Authorization: `Bearer ${token}`,
      }
    )
      .then((response) => {
        setAppointments(response.data.appointments)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error)
        setLoading(false)
      })
  }, [])
  const handleJoinVideoCall = () => {
    navigate(`/room`)
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold text-white">
        User Appointments
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((appointment) => (
            <div
              key={appointment._id}
              className="rounded-lg border bg-white p-4 shadow-md"
            >
              <h2 className="mb-2 text-lg font-semibold">
                Patient: {appointment.patient.name}
              </h2>
              <p className="text-gray-600">Doctor: {appointment.doctor.name}</p>
              <button
                className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                onClick={handleJoinVideoCall}
              >
                Join Video Call
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Appointments
