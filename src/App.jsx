import { useEffect } from "react"

import "./App.css"
// Redux
import { useDispatch, useSelector } from "react-redux"
// React Router
import { Route, Routes, useNavigate } from "react-router-dom"

import BlogPage from "./components/Blogs/BlogPage"
// Components
import Navbar from "./components/Common/Navbar"
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import AddCourse from "./components/core/Dashboard/AddCourse"
import ApointmentDoc from "./components/core/Dashboard/DoctorDashboard/ApointmentDoc"
import DoctorDashboard from "./components/core/Dashboard/DoctorDashboard/DoctorDashboard"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import MyProfile from "./components/core/Dashboard/MyProfile"
import MyCourses from "./components/core/Dashboard/MyPublishments"
import MyPublishments from "./components/core/Dashboard/MyPublishments"
import Appointments from "./components/core/Dashboard/PatientDashboard/Appointments"
import BlogPageEdit from "./components/core/Dashboard/PatientDashboard/BlogPageEdit"
import Consult from "./components/core/Dashboard/PatientDashboard/Consult"
import HealtRecords from "./components/core/Dashboard/PatientDashboard/HealtRecords"
import Settings from "./components/core/Dashboard/Settings"
import About from "./pages/About"
import Catalog from "./pages/Catalog"
import Contact from "./pages/Contact"
import CourseDetails from "./pages/CourseDetails"
import Dashboard from "./pages/Dashboard"
import Doctors from "./pages/Doctors"
import Error from "./pages/Error"
import ForgotPassword from "./pages/ForgotPassword"
// Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import UpdatePassword from "./pages/UpdatePassword"
import VerifyEmail from "./pages/VerifyEmail"
import { getUserDetails } from "./services/operations/profileAPI"
import { ACCOUNT_TYPE } from "./utils/constants"

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col bg-[#305faa] font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        {/* Open Route - for Only Non Logged in User */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />
        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route path="dashboard/blog-edit" element={<BlogPageEdit />} />
          {/* Route only for Doctors */}
          {user?.accountType === ACCOUNT_TYPE.DOCTOR && (
            <>
              <Route path="dashboard/doctor" element={<DoctorDashboard />} />
              <Route
                path="dashboard/all-publishments"
                element={<MyPublishments />}
              />
              <Route
                path="dashboard/publish-yourself"
                element={<AddCourse />}
              />
              <Route
                path="dashboard/appointments-doc"
                element={<ApointmentDoc />}
              />
              {/* <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              /> */}
            </>
          )}
          {/* Route only for Patiensts */}
          {user?.accountType === ACCOUNT_TYPE.PATIENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />

              <Route
                path="/dashboard/health-records"
                element={<HealtRecords />}
              />
              <Route
                path="/dashboard/appointments"
                element={<Appointments />}
              />
              <Route path="/dashboard/consult" element={<Consult />} />
            </>
          )}
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
