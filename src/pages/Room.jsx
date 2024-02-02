import React, { useEffect, useRef } from "react"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"

const Room = () => {
  const roomId = "hbsjhv"
  const meetingContainerRef = useRef(null)

  useEffect(() => {
    const initVideoCall = async () => {
      console.log("Room ID:", roomId)

      const appID = 856053567
      const serverSecret = "05decd1e23f2c98c4374f69fda2d22df"

      // Corrected Date.now().toString() to generate the token correctly
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "Niladri"
      )

      console.log("Kit Token:", kitToken)

      const zegoInstance = ZegoUIKitPrebuilt.create(kitToken)

      console.log("Zego instance:", zegoInstance)

      zegoInstance.joinRoom({
        container: meetingContainerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      })
    }

    initVideoCall()
  }, [roomId])

  return (
    <div
      ref={meetingContainerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  )
}

export default Room
