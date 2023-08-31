import React from "react"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"

const Room = () => {
  const { roomid } = useParams()

  let myMeeting = async (element) => {
    console.log("Room id", roomid)
    // generate Kit Token
    const appID = 1939137197
    const serverSecret = "d97fcc8e765805de011213fea2146e20"
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomid,
      Date.now().toString,
      "Niladri"
    )
    console.log(kitToken)

    const zp = ZegoUIKitPrebuilt.create(kitToken)
    console.log("Zego instance", zp)
    zp.joinRoom({
      container: element,

      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    })
  }

  return <div ref={myMeeting} roomid={roomid}></div>
}

export default Room
