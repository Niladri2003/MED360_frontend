import React, { useEffect, useState } from "react"
import { Editor } from "@tinymce/tinymce-react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"

import fireb from "../../firebase"
import BlogViewCard from "./BlogViewCard"

// firebase setup
const db = fireb.firestore()
const FBStorage = fireb.storage()
const Bloglist = db.collection("blogs")

const BlogPage = () => {
  const { user } = useSelector((state) => state.profile)

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [bloglist, setBloglist] = useState([])

  const submit = (e) => {
    const timestamp = Date.now()
    const currentDate = new Date(timestamp)
    const formattedDate = `${currentDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })} ${currentDate.getFullYear()}`
    e.preventDefault()
    Bloglist.add({
      Title: title,
      Body: body,
      User: `${user?.firstName + " " + user?.lastName}`,
      Date: formattedDate,
    })
      .then((docref) => {
        toast.dismiss()
        toast.success("Blog Created")
      })
      .catch((e) => {
        toast.dismiss()
        toast.error("created error")
      })
  }

  useEffect(() => {
    console.log(bloglist)
    const unsubscribe = Bloglist.onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      setBloglist(data)
    })
    return unsubscribe
  }, [Bloglist])

  return (
    <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-20  text-white">
      {user !== null && (
        <div className=" w-full items-center justify-center p-2">
          <form
            onSubmit={(event) => {
              submit(event)
            }}
            className="flex flex-col gap-2 rounded-md border-[1px] border-white p-2"
          >
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              value={title}
              required
              className="w-full rounded-md border-[1px] border-white bg-transparent p-2 text-white"
            />
            <textarea
              name="message"
              cols="30"
              rows="7"
              placeholder="Write a message us"
              className="mt-5 w-full  rounded-md border-[1px] border-white bg-transparent text-white"
              onChange={(e) => {
                setBody(e.target.value)
              }}
              style={{ padding: "10px" }}
            />
            {/* <Editor
            style={{
              border: "1px solid red",
              borderRadius: "5px",
              minHeight: "300px",
            }}
            textareaName="content"
            initialValue="write your content here"
            onEditorChange={(newText) => {
              setBody(newText)
            }}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          /> */}

            <button type="submit" className=" ">
              Submit
            </button>
          </form>
        </div>
      )}
      <div className="flex w-full flex-col gap-2 p-2">
        <p className="text-2xl font-bold text-white">Trending Blogs</p>
        {bloglist.map((blog) => (
          <BlogViewCard
            key={blog.id}
            title={blog.Title}
            username={blog.User}
            body={blog.Body}
            date={blog.Date}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPage
