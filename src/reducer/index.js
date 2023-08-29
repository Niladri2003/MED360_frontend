import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../slices/authSlice"
import cartReducer from "../slices/cartSlice"
import courseReducer from "../slices/courseSlice"
import doctorsReducer from "../slices/doctorsSlice"
import profileReducer from "../slices/profileSlice"
import viewCourseReducer from "../slices/viewCourseSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  course: courseReducer,
  cart: cartReducer,
  viewCourse: viewCourseReducer,
  doctor: doctorsReducer,
})

export default rootReducer
