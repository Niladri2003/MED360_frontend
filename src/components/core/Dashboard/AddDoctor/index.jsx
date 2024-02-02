import RenderSteps from "./RenderSteps"

export default function AddPublisment() {
  return (
    <>
      <div className="flex w-full items-start gap-x-6">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-medium text-richblack-5">
            Publsih Yourself
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>
      </div>
    </>
  )
}
