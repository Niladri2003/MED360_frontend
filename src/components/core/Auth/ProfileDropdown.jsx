import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { BiSolidDashboard } from "react-icons/bi"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
          className="aspect-square w-[35px] rounded-full object-cover"
        />
        <AiOutlineCaretDown
          className="text-sm text-black"
          color="black"
          fill="#090a0a"
        />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-[118%] z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md  bg-white"
          ref={ref}
        >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 px-[12px] py-[10px] text-sm text-black hover:bg-[#305faa] hover:text-white">
              <BiSolidDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 px-[12px] py-[10px] text-sm  text-black hover:bg-[#305faa] hover:text-white"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}
