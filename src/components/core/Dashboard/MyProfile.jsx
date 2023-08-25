import { RiEditBoxLine } from "react-icons/ri"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { formattedDate } from "../../../utils/dateFormatter"
import IconBtn from "../../Common/IconBtn"

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  return (
    <div className="">
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1>
      <div className="flex w-full flex-col items-center justify-between rounded-md border-[1px]  border-white p-8 px-12">
        <div className=" flex w-full items-center justify-between gap-x-4 pl-10 pr-11">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
          <IconBtn
            outline={true}
            textcolor={"text-white"}
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine color="white" />
          </IconBtn>
        </div>
        {/* line */}
        <div className="mt-10 h-[1px] w-[1000px] bg-white"></div>
        {/* About section */}
        <div className="my-10 flex w-full flex-col gap-y-10 rounded-md px-12">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">About</p>
            <IconBtn
              text="Edit"
              textcolor={"text-white"}
              outline={true}
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>
          <p
            className={`${
              user?.additionalDetails?.about ? "text-richblack-5" : "text-white"
            } text-sm font-medium`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>

        {/* line */}
        <div className="mt-10 h-[1px] w-[1000px] bg-white"></div>
        {/* About section */}

        {/* Personal Details */}
        <div className="my-10 flex w-full flex-col gap-y-10 rounded-md   p-8 px-12">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-richblack-5">
              Personal Details
            </p>
            <div className="">
              <IconBtn
                textcolor={"text-white"}
                outline={true}
                text="Edit"
                onclick={() => {
                  navigate("/dashboard/settings")
                }}
              >
                <RiEditBoxLine />
              </IconBtn>
            </div>
          </div>
          <div className="flex max-w-[500px] justify-between">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-white">First Name</p>
                <p className="text-sm font-medium text-richblack-300">
                  {user?.firstName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-white">Email</p>
                <p className="text-sm font-medium text-richblack-300">
                  {user?.email}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-white">Gender</p>
                <p className="text-sm font-medium text-richblack-300">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="mb-2 text-sm text-white">Last Name</p>
                <p className="text-sm font-medium text-richblack-300">
                  {user?.lastName}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-white">Phone Number</p>
                <p className="text-sm font-medium text-richblack-300">
                  {user?.additionalDetails?.contactNumber ??
                    "Add Contact Number"}
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm text-white">Date Of Birth</p>
                <p className="text-sm font-medium text-richblack-300">
                  {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                    "Add Date Of Birth"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
