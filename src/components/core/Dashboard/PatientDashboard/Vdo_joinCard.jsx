import React from "react"

import "../PatientDashboard/Table.css"
import { useSelector } from "react-redux"

const Vdo_joinCard = () => {
  const { user } = useSelector((state) => state.profile)

  return (
    <div className="table-wrapper overflow-hidden">
      <table className="mx-3 table  rounded-md  border-b-2  ">
        <thead>
          <tr>
            <th className=" border-l-2 border-r-2 ">
              {user.accountType === "Doctor"
                ? "Patients Name"
                : "  Doctors Name"}
            </th>
            <th className="border-r-2  ">Details</th>
            <th className="w-[100%] border-r-2 ">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border-r-2  text-white ">Rohan Bannerje</td>
            <td className="expand flex flex-row gap-3 border-r-2  ">
              <button
                type="button"
                className="transform rounded-md bg-blue-600 px-2 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75 "
              >
                View Health Report
              </button>
            </td>

            <td className="fit">
              <span className="actions ">
                <button
                  type="button"
                  className="transform rounded-md bg-caribbeangreen-400  px-8 py-2 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-x-75 "
                >
                  Join
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Vdo_joinCard
