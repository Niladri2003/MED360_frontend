import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  DoctorData: null,
  loading: false,
}

const doctorSlice = createSlice({
  name: "doctor",
  initialState: initialState,
  reducers: {
    setdoctorData(state, value) {
      state.signupData = value.payload
    },
  },
})

export const { setdoctorData } = doctorSlice.actions

export default doctorSlice.reducer
