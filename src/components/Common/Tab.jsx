export default function Tab({ tabData, field, setField }) {
  return (
    <div
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="my-6 flex max-w-max gap-x-1 rounded-full bg-[#b4e7ed] p-2"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setField(tab.type)}
          className={`${
            field === tab.type
              ? "bg-[#3c767d] text-richblack-5"
              : "bg-[#b4e7ed] text-richblack-200"
          } rounded-full px-5 py-2 transition-all duration-200`}
        >
          {tab?.tabName}
        </button>
      ))}
    </div>
  )
}
