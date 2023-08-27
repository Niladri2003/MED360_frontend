import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"

import fireb from "../../../../firebase"
import BlogViewCard from "../../../Blogs/BlogViewCard"

// firebase setup
const db = fireb.firestore()
const FBStorage = fireb.storage()
const Bloglist = db.collection("blogs")

const BlogPageEdit = () => {
  const [bloglist, setBloglist] = useState([])
  const { user } = useSelector((state) => state.profile)

  const deleteBlog = (id) => {
    Bloglist.doc(id)
      .delete()
      .then(() => {
        toast.success("Blog Deleted")
      })
      .catch((e) => {
        toast.error("error while deleting")
      })
  }
  useEffect(() => {
    const desiredM_id = `${user._id}` // Replace with the specific M_id you want to query for
    const unsubscribe = Bloglist.where("M_id", "==", desiredM_id).onSnapshot(
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setBloglist(data)
      }
    )
    console.log(bloglist)
    return unsubscribe
  }, [])

  return (
    <div className="flex flex-col gap-4 text-white">
      <p className="text-2xl text-white">Your Blogs</p>
      <div className="h-[1px] w-full bg-white"></div>

      {bloglist.length > 0 ? (
        bloglist.map((blog) => (
          <BlogViewCard
            key={blog.id}
            title={blog.Title}
            username={blog.User}
            body={blog.Body}
            date={blog.Date}
            button={true}
            delet={deleteBlog}
            id={blog.id}
          />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  )
}

export default BlogPageEdit
