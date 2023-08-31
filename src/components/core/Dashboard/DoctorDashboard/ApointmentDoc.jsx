import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const ApointmentDoc = () => {
  const [roomid, setroomid] = useState()
  const navigate = useNavigate()

  const handlejoin = () => {
    navigate(`/room/${roomid}`)
  }
  return (
    <div>
      <input
        placeholder="roomid"
        type="text"
        value={roomid}
        onChange={(e) => {
          setroomid(e.target.value)
        }}
      ></input>
      <button
        className="rounded-md border-[1px] border-white p-4 text-white"
        onClick={handlejoin}
      >
        Join Video Call
      </button>
    </div>
  )
}

export default ApointmentDoc
