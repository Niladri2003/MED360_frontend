import React from "react"

const Card = ({ cardtitle, cardIcon }) => {
  return (
    <div className=" w-25 flex h-36 flex-col items-center justify-around rounded-md border-[1px] border-white p-4 shadow-md shadow-black hover:bg-[#3098aa] hover:shadow-lg hover:shadow-black">
      <img src={cardIcon} className="h-10" />
      <p className="font-bold">{cardtitle}</p>
    </div>
  )
}

export default Card
