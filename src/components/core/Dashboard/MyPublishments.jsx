import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchInstructorCourses } from "../../../services/operations/courseDetailsAPI"
import IconBtn from "../../Common/IconBtn"
import PublishTable from "./DoctorPublish/PublishTable"

export default function MyPublishments() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      const result = await fetchInstructorCourses(token)
      if (result) {
        setCourses(result)
      }
    }
    fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-richblack-5">Publishments</h1>
        <IconBtn
          text="Create"
          onclick={() => navigate("/dashboard/publish-yourself")}
          outline={true}
          textcolor={"text-white"}
        >
          <VscAdd color="white" />
        </IconBtn>
      </div>
      {courses && <PublishTable courses={courses} setCourses={setCourses} />}
    </div>
  )
}
