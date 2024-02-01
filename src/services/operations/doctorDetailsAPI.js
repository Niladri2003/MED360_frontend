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
  GET_ALL_INSTRUCTOR_COURSES_API,
} = courseEndpoints

export function getAllDoctors() {
  return async (dispatch) => {
    let result = []
    try {
      const response = await apiConnector(
        "GET",
        courseEndpoints.GET_ALL_DOCTORS_API
      )
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch  Categories")
      }
      result = response?.data?.data
      dispatch(setdoctorData(result))
      console.log(result)
    } catch (error) {
      console.log(" ERROR............", error)
    }
  }
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
    console.log(result)
  } catch (error) {
    console.log("COURSE_CATEGORY_API API ERROR............", error)
    toast.error(error.message)
  }
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
export const addDoctorPublishments = async (data, token) => {
  let result = null
  const toastId = toast.loading("Loading...")
  try {
    const response = await apiConnector("POST", CREATE_COURSE_API, data, {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    })
    console.log("CREATE Doctor Publishment API RESPONSE............", response)
    if (!response?.data?.success) {
      throw new Error("Could Not Doctor Details")
    }
    toast.success("Doctors Details Added Successfully")
    result = response?.data?.data
  } catch (error) {
    console.log("CREATE doctor publishment API ERROR............", error)
    toast.error(error.message)
  }
  toast.dismiss(toastId)
  return result
}
