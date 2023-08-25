import { useEffect, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { RxCountdownTimer } from "react-icons/rx"
import OtpInput from "react-otp-input"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import { sendOtp, signUp } from "../services/operations/authAPI"

function VerifyEmail() {
  const [otp, setOtp] = useState("")
  const { signupData, loading } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleVerifyAndSignup = (e) => {
    e.preventDefault()
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    )
  }

  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center bg-[#ebe8e8]">
      {loading ? (
        <div>
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="max-w-[500px] rounded-md bg-white p-4 shadow-md shadow-black lg:p-8">
          <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-black">
            Verify Email
          </h1>
          <p className="my-4 text-[1.125rem] leading-[1.625rem] text-black">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    backgroundColor: "#b4e7ed",
                    color: "black",
                  }}
                  className="aspect-square w-[48px] rounded-[0.5rem] border-0 bg-richblack-800 text-center text-richblack-5 focus:border-0 focus:outline-2 focus:outline-yellow-50 lg:w-[60px]"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="mt-6 w-full rounded-[8px] bg-[#46b9ea] px-[12px] py-[12px] font-medium text-richblack-900"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/signup">
              <p className="flex items-center gap-x-2 text-black">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center gap-x-2 text-blue-100"
              onClick={() => dispatch(sendOtp(signupData.email))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VerifyEmail
