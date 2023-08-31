import React from "react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"

import profile from "../../../../assets/Images/Instructor.png"
import { apiConnector } from "../../../../services/apiConnector"
import { patientPaymentEndpoints } from "../../../../services/apis"

const Final_Checkout = ({ doctorDetails, doctorUsrId }) => {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const doctorid = doctorDetails._id
  console.log("user", user)

  const handlepayment = async () => {
    console.log()
    if (user.accountType === "Patient") {
      // payment api call
      const {
        data: { data },
      } = await apiConnector(
        "POST",
        patientPaymentEndpoints.APT_PAYMENT_API,
        {
          doctorid,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      )

      console.log("Data", data)
      const options = {
        key: "rzp_test_ApBTUeBOWrQlC4",
        amount: data.amount,
        currency: "INR",
        name: user.firstName,
        description: "Appointment on MED360",
        image: user.image,
        order_id: data.id,
        handler: function (response) {
          sendPaymentSuccessEmail(response, data.amount, token)
          // verifyPayment({ ...response, doctorid }, token, navigate)
          console.log(response)
        },
        prefill: {
          name: user.firstName,
          email: user.email,
          contact: user.additionalDetails.contactNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      }
      const razor = new window.Razorpay(options)
      razor.open()
      console.log(data)
    } else {
    }
  }
  async function sendPaymentSuccessEmail(response, amount, token) {
    try {
      console.log("Raxorpya response", response)
      await apiConnector(
        "POST",
        patientPaymentEndpoints.SEND_PAYMENT_SUCCESS_EMAIL_API,
        {
          response,
          amount,
          userId: user._id,
          doctorId: doctorUsrId,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      )
    } catch (e) {
      console.log("PAYMENT SUCCESS EMAIL ERROR............", e)
    }
  }

  const showToast = () => {
    // Implement your toast notification logic here
    // This could be using a library like react-toastify or a custom solution
  }

  return (
    <div>
      <div class="container mx-auto my-1 p-5">
        <div class="no-wrap md:-mx-2 md:flex ">
          <div class="w-full md:mx-2 md:w-3/12">
            <div class="border-green-400 border-t-4 bg-white p-3">
              <div class="image overflow-hidden ">
                <img
                  className="mx-auto h-[200px] w-[200px] rounded-full border-[2px]"
                  src={`${doctorDetails.Doctor.image}`}
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 my-1 text-center text-xl font-bold leading-8 text-black">
                Dr. {`${doctorDetails.Docpublicname}`}
              </h1>
              <h3 class="text-gray-600 font-sm text-semibold mb-2 text-center leading-6 text-richblack-300">
                {`${doctorDetails.Education}`}
              </h3>
              <p class="text-gray-500 hover:text-gray-600 mb-2 text-center  text-sm leading-6  text-black  ">
                {`${doctorDetails.DocDescription}`}
              </p>
              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 mt-3 divide-y rounded px-3 py-2 shadow-sm hover:shadow">
                <li class="flex items-center py-3 text-black">
                  <span className="text-black">Status</span>
                  <span class="ml-auto">
                    <span class="rounded bg-caribbeangreen-200 px-2 py-1 text-sm text-white">
                      {`${doctorDetails.Doctor.active}`}
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3 ">
                  <span className="text-black">Member since</span>
                  <span class="ml-auto text-xs text-black">{`${doctorDetails.createdAt}`}</span>
                </li>
              </ul>
            </div>
            <div class="my-4"></div>
          </div>
          <div class="mx-2 h-64 w-full md:w-9/12">
            <div class="rounded-sm bg-white p-3 shadow-sm">
              <div class="text-gray-900 flex items-center space-x-2 font-semibold leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <div class="grid text-sm md:grid-cols-2 ">
                  <div class="grid grid-cols-2 border-richblack-800">
                    <div class="border-richblack-800 px-4 py-2 font-semibold text-black ">
                      First Name
                    </div>
                    <div class="px-4 py-2 text-richblack-400">{`${doctorDetails.Doctor.firstName}`}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">
                      Last Name
                    </div>
                    <div class="px-4 py-2 text-richblack-400">{`${doctorDetails.Doctor.lastName}`}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">Gender</div>
                    <div class="px-4 py-2 text-richblack-400">
                      {doctorDetails.Doctor.additionalDetails.gender}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">
                      Contact No.
                    </div>
                    <div class="px-4 py-2 text-richblack-400">
                      {doctorDetails.Doctor.additionalDetails.contactNumber}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">
                      Current Address
                    </div>
                    <div class="px-4 py-2 text-richblack-400">
                      Beech Creek, PA, Pennsylvania
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">
                      Permanant Address
                    </div>
                    <div class="px-4 py-2 text-richblack-400">
                      {doctorDetails.Doctor.email}
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">Email.</div>
                    <div class="px-4 py-2">
                      <a
                        class="text-blue-800"
                        href="mailto:jane@example.com text-richblack-400"
                      >
                        {doctorDetails.Doctor.email}
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold text-black">
                      Birthday
                    </div>
                    <div class="px-4 py-2 text-richblack-400">
                      {" "}
                      {doctorDetails.Doctor.additionalDetails.dateOfBirth}
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={handlepayment}
                class="mx-5 my-2 flex transform rounded-md bg-blue-600 px-10 py-3 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75  "
                disabled={user.accountType === "Doctor" ? true : false}
              >
                {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg> */}

                {/* Button payment */}
                <span class="ml-2">
                  Request an Appointment ₹{`${doctorDetails.price}`}
                </span>
              </button>
            </div>

            <div class="my-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final_Checkout
