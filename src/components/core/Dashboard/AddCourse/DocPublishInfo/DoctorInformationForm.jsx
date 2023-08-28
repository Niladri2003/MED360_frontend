import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { HiOutlineCurrencyRupee } from "react-icons/hi"
import { MdNavigateNext } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"

import {
  addCourseDetails,
  editCourseDetails,
  fetchDocCategories,
} from "../../../../../services/operations/doctorDetailsAPI"
import { setCourse, setStep } from "../../../../../slices/courseSlice"
import IconBtn from "../../../../Common/IconBtn"
import Upload from "../Upload"

export default function DoctorInformationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { course, editCourse } = useSelector((state) => state.course)
  const [loading, setLoading] = useState(false)
  const [courseCategories, setCourseCategories] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true)
      const categories = await fetchDocCategories()
      if (categories.length > 0) {
        // console.log("categories", categories)
        setCourseCategories(categories)
      }
      setLoading(false)
    }
    getCategories()
  }, [])

  //   handle next button click
  const onSubmit = async (data) => {
    console.log(data)
    console.log("HEllo")

    const formData = new FormData()
    formData.append("Docpublicname", data.publicname)
    formData.append("DocDescription", data.DoctorDesc)
    formData.append("price", data.AptPrice)
    formData.append("DocRegno", data.Regno)
    formData.append("category", data.DocCategory)
    formData.append("ClinicAddress", data.Address)
    // formData.append("thumbnailImage", data.courseImage)
    formData.append("Education", data.Education)
    formData.append("Language", data.Language)
    setLoading(true)
    const result = await addCourseDetails(formData, token)

    setLoading(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 rounded-md border-[1px] border-white  p-6"
    >
      {/* <Upload
        name="Image"
        label="Upload your image"
        register={register}
        setValue={setValue}
        errors={errors}
      /> */}
      {/* Display Name */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="publicname">
          Enter Your name <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="publicname"
          placeholder=" Enter Your name"
          {...register("publicname", { required: true })}
          className="form-style w-full border-b-4 "
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Your name is required
          </span>
        )}
      </div>
      {/*  Description */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseShortDesc">
          Your Description <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="DoctorDesc"
          placeholder="Enter Description"
          {...register("DoctorDesc", { required: true })}
          className="form-style w-full border-b-4 "
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        />
        {errors.courseShortDesc && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Your Description is required
          </span>
        )}
      </div>
      {/* Course Price */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="coursePrice">
          Appointment Price <sup className="text-pink-200">*</sup>
        </label>
        <div className="relative">
          <input
            id="AptPrice"
            placeholder="Enter Appointment Price"
            {...register("AptPrice", {
              required: true,
              valueAsNumber: true,
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
            className="form-style w-full border-b-4 !pl-10"
            style={{ backgroundColor: "#b4e7ed", color: "black" }}
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-1/2 inline-block -translate-y-1/2 text-2xl text-richblack-400" />
        </div>
        {errors.coursePrice && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Appointment Price is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="publicname">
          Enter Your Reg-no <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="Regno"
          placeholder=" Enter Your Reg-no"
          {...register("Regno", { required: true })}
          className="form-style w-full border-b-4 !pl-10"
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Reg no is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="publicname">
          Enter your known Languages <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="Language"
          placeholder=" Enter Language"
          {...register("Language", { required: true })}
          className="form-style w-full border-b-4 "
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Languages is required
          </span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="publicname">
          Enter your known Education <sup className="text-pink-200">*</sup>
        </label>
        <input
          id="Language"
          placeholder=" Enter Education"
          {...register("Education", { required: true })}
          className="form-style w-full border-b-4 "
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        />
        {errors.courseTitle && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Education is required
          </span>
        )}
      </div>
      {/* Doctor Category */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseCategory">
          Choose Your Category <sup className="text-pink-200">*</sup>
        </label>
        <select
          {...register("DocCategory", { required: true })}
          defaultValue=""
          id="DocCategory"
          className="form-style w-full border-b-4 "
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        >
          <option value="" disabled>
            Choose Your Category
          </option>
          {!loading &&
            courseCategories?.map((category, indx) => (
              <option key={indx} value={category?._id}>
                {category?.name}
              </option>
            ))}
        </select>
        {errors.courseCategory && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Doctor Category is required
          </span>
        )}
      </div>

      {/* Course Thumbnail Image */}

      <div className="flex flex-col space-y-2">
        <label className="text-sm text-richblack-5" htmlFor="courseBenefits">
          Enter your Address <sup className="text-pink-200">*</sup>
        </label>
        <textarea
          id="Address"
          placeholder="Enter your Address"
          {...register("Address", { required: true })}
          className="form-style w-full border-b-4 "
          style={{ backgroundColor: "#b4e7ed", color: "black" }}
        />
        {errors.courseBenefits && (
          <span className="ml-2 text-xs tracking-wide text-pink-200">
            Address is required
          </span>
        )}
      </div>

      {/* Next Button */}
      <div className="flex justify-end gap-x-2">
        <IconBtn
          disabled={loading}
          text={"Submit"}
          outline={true}
          textcolor={"text-white"}
        >
          <MdNavigateNext />
        </IconBtn>
      </div>
    </form>
  )
}
