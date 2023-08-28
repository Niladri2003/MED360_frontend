import { FaCheck } from "react-icons/fa"
import { useSelector } from "react-redux"

import DoctorInformationForm from "./DocPublishInfo/DoctorInformationForm"
import PublishCourse from "./PublishCourse"

export default function RenderSteps() {
  const { step } = useSelector((state) => state.course)

  return (
    <>
      <DoctorInformationForm />
      {/* Render specific component based on current step */}
      {/* {step === 1 && <CourseInformationForm />}
      {step === 2 && <CourseBuilderForm />}
      {step === 3 && <PublishCourse />} */}
    </>
  )
}
