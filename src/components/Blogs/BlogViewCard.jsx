import React from "react"

const BlogViewCard = ({ title, username, body }) => {
  return (
    <div className="flex flex-col items-start gap-2 p-4">
      <p className="text-2xl font-bold">{title}</p>
      <p className="font-bold">{username}</p>

      <p>{body}</p>
    </div>
  )
}

export default BlogViewCard
