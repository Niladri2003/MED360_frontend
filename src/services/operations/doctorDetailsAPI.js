import { toast } from "react-hot-toast"

import { setdoctorData } from "../../slices/doctorsSlice"
import { updateCompletedLectures } from "../../slices/viewCourseSlice"
// import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../apiConnector"
import { courseEndpoints } from "../apis"

const {
  COURSE_DETAILS_API,
  COURSE_CATEGORIES_API,
  GET_ALL_COURSE_API,
  CREATE_COURSE_API,
  EDIT_COURSE_API,
  CREATE_SECTION_API,
  CREATE_SUBSECTION_API,
  UPDATE_SECTION_API,
  UPDATE_SUBSECTION_API,
  DELETE_SECTION_API,
  DELETE_SUBSECTION_API,
  GET_ALL_INSTRUCTOR_COURSES_API,
  DELETE_COURSE_API,
  GET_FULL_COURSE_DETAILS_AUTHENTICATED,
  CREATE_RATING_API,
  LECTURE_COMPLETION_API,
} = courseEndpoints

export const getAllDoctors = async () => {
  const toastId = toast.loading("Loading...")
  let result = []
  try {
    const response = await apiConnector("GET", GET_ALL_COURSE_API)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("GET_ALL_COURSE_API API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

export const fetchCourseDetails = async (courseId) => {
  const toastId = toast.loading("Loading...")
  //   dispatch(setLoading(true));
  let result = null
  try {
    const response = await apiConnector("POST", COURSE_DETAILS_API, {
      courseId,
    })
    console.log("COURSE_DETAILS_API API RESPONSE............", response)

    if (!response.data.success) {
      throw new Error(response.data.message)
    }
    result = response.data
  } catch (error) {
    console.log("COURSE_DETAILS_API API ERROR............", error)
    result = error.response.data
    // toast.error(error.response.data.message);
  }
  toast.dismiss(toastId)
  //   dispatch(setLoading(false));
  return result
}

// fetching the available course categories
export const fetchDocCategories = async () => {
  let result = []
  try {
    const response = await apiConnector("GET", COURSE_CATEGORIES_API)
    console.log("COURSE_CATEGORIES_API API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Course Categories")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error)
    toast.error(error.message)
  }
  return result
}

// add the course details

// edit the course details

// create a section

// delete a subsection
export const deleteSubSection = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
      Authorization: `Bearer ${token}`,
    })
    console.log("DELETE SUB-SECTION API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Delete Lecture")
    }
    toast.success("Lecture Deleted")
    result = response?.data?.data
  } catch (error) {
    console.log("DELETE SUB-SECTION API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}

// fetching all courses under a specific instructor
export const fetchInstructorCourses = async (token) => {
  let result = []
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector(
      "GET",
      GET_ALL_INSTRUCTOR_COURSES_API,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    )
    console.log("INSTRUCTOR COURSES API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch Instructor Courses")
    }
    result = response?.data?.data
  } catch (error) {
    console.log("INSTRUCTOR COURSES API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
