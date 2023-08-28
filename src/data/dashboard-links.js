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
    path: "/dashboard/doctor",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "Your Publsihments",
    path: "/dashboard/all-publishments",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Publish Yourself",
    path: "dashboard/publish-yourself",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscAdd",
  },

  {
    id: 5,
    name: "Health Records",
    path: "/dashboard/health-records",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscDatabase",
  },
  {
    id: 6,
    name: "Appointments",
    path: "/dashboard/appointments",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscDatabase",
  },
  {
    id: 7,
    name: "Consult",
    path: "/dashboard/consult",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscDatabase",
  },
  {
    id: 8,
    name: "Appointments",
    path: "dashboard/appointments-doc",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscDatabase",
  },
  {
    id: 9,
    name: "Blogs",
    path: "dashboard/blog-edit",
    icon: "VscDatabase",
  },
]
