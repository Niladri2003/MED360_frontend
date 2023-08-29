import React from "react"

import profile from "../../../../assets/Images/Instructor.png"

const Final_Checkout = ({ doctorDetails }) => {
  return (
    <div>
      <div class="container mx-auto my-1 p-5">
        <div class="no-wrap md:-mx-2 md:flex ">
          <div class="w-full md:mx-2 md:w-3/12">
            <div class="border-green-400 border-t-4 bg-white p-3">
              <div class="image overflow-hidden ">
                <img
                  className="mx-auto h-[200px] w-[200px] rounded-full"
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
                class="mx-5 my-2 flex transform rounded-md bg-blue-600 px-10 py-3 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75  "
              >
                {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg> */}

                <span class="ml-2">
                  Request an Appointment ₹{`${doctorDetails.price}`}
                </span>
              </button>
            </div>

            <div class="my-4"></div>

            {/* <div class="bg-white p-3 shadow-sm rounded-sm">

                            <div class="grid grid-cols-2">
                                <div>
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide">Experience</span>
                                    </div>
                                    <ul class="list-inside space-y-2">
                                        <li>
                                            <div class="text-teal-600">Owner at Her Company Inc.</div>
                                            <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div class="text-teal-600">Owner at Her Company Inc.</div>
                                            <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div class="text-teal-600">Owner at Her Company Inc.</div>
                                            <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div class="text-teal-600">Owner at Her Company Inc.</div>
                                            <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                        <span clas="text-green-500">
                                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path fill="#fff"
                                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                            </svg>
                                        </span>
                                        <span class="tracking-wide">Education</span>
                                    </div>
                                    <ul class="list-inside space-y-2">
                                        <li>
                                            <div class="text-teal-600">Masters Degree in Oxford</div>
                                            <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                        <li>
                                            <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                            <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final_Checkout
