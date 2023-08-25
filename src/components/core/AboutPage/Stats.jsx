import React from "react"

const Stats = [
  { count: "100", label: "Active Doctors" },
  { count: "10k", label: "Patienst" },
  { count: "200+", label: "Lab tests" },
  { count: "50+", label: "Awards" },
]

const StatsComponenet = () => {
  return (
    <div className="bg-[#12c9edce]">
      {/* Stats */}
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white ">
        <div className="grid grid-cols-2 text-center md:grid-cols-4">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[30px] font-bold text-richblack-5">
                  {data.count}
                </h1>
                <h2 className="text-[16px] font-semibold text-richblack-500">
                  {data.label}
                </h2>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default StatsComponenet
