import React from "react"

const BlogViewCard = ({ title, username, body, date, button, delet, id }) => {
  console.log(date)
  return (
    <div className="flex w-full flex-row items-start gap-2 rounded-md border-[1px] border-white p-4 shadow-sm shadow-black">
      <div className="flex w-[90%] flex-col gap-4 p-4">
        <p className="text-2xl font-bold">{title}</p>
        <p className="font-bold">{username}</p>

        <div className="text-lg" dangerouslySetInnerHTML={{ __html: body }} />
        <div className="text-[10px]">{date}</div>
      </div>
      {button === true && (
        <div className="flex flex-col items-start gap-2 text-sm">
          <button>Edit</button>
          <button onClick={() => delet(id)}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default BlogViewCard
