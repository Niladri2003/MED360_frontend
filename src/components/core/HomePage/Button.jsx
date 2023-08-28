import React from "react"
import { Link } from "react-router-dom"

const Button = ({ children, active, linkto }) => {
  return (
    <Link to={linkto}>
      <div
        className={`rounded-md border-2 px-6 py-3 text-center text-[13px] font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] sm:text-[16px] ${
          active ? "bg-yellow-50 text-black " : ""
        } transition-all duration-200 hover:scale-95 hover:shadow-none `}
      >
        {children}
      </div>
    </Link>
  )
}

export default Button
