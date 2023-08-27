import React from "react"

const BlogViewCard = ({ title, username, body, date }) => {
  console.log(date)
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-md border-[1px] border-white p-4 shadow-sm shadow-black">
      <p className="text-2xl font-bold">{title}</p>
      <p className="font-bold">{username}</p>

      <div dangerouslySetInnerHTML={{ __html: body }} />
      <div className="text-sm">{date}</div>
    </div>
  )
}

export default BlogViewCard
