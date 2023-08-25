export default function IconBtn({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
  textcolor,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`flex items-center ${
        outline ? "border border-white bg-transparent" : "bg-yellow-50"
      } cursor-pointer gap-x-2 rounded-md px-5 py-2 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && textcolor}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  )
}
