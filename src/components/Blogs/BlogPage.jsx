import React from "react"

import BlogViewCard from "./BlogViewCard"

const BlogPage = () => {
  return (
    <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 border-[1px] border-white text-white">
      <div>
        <BlogViewCard body={"h"} title={"Hello"} username={"Niladri"} />
      </div>
    </div>
  )
}

export default BlogPage
