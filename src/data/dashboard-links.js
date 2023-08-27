import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Publish Yourself",
    path: "/dashboard/add-course",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 7,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscArchive",
  },
  {
    id: 8,
    name: "Health Records",
    path: "/dashboard/health-records",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDatabase",
  },
  {
    id: 9,
    name: "Appointments",
    path: "/dashboard/appointments",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDatabase",
  },
  {
    id: 10,
    name: "Consult",
    path: "/dashboard/consult",
    type: ACCOUNT_TYPE.STUDENT,
    icon: "VscDatabase",
  },
  {
    id: 11,
    name: "Appointments",
    path: "dashboard/appointments-doc",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDatabase",
  },
]
