import React, { useState } from "react"

const Doccard = ({ doctor, img }) => {
  return (
    <div className="">
      <div className=" flex transform flex-col items-center rounded-md bg-white  p-4 transition duration-500 hover:scale-110">
        <div>
          <img
            src={`${doctor.Doctor !== null && doctor.Doctor.image}`}
            alt="photo user"
            className=" ounded-full h-24 w-24 border-[1px] border-black	bg-contain"
          ></img>
        </div>
        <div id="title " className=" mt-4 px-4 text-xl font-bold text-black ">
          {`${doctor.Docpublicname}`}
        </div>
        <div id="subtitle" className=" text-gray-500 mt-1 text-sm text-black">
          {`${doctor.category.name}`}
        </div>
        <div
          id="subtitle"
          className="text-gray-500 mt-2 text-xs text-pure-greys-400 "
        >
          {`${doctor.Education}`}
        </div>
        {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div> */}
        <div className="mt-2  text-[15px] font-bold text-black">
          {`Fees - ₹${doctor.price}`}
        </div>

        <button
          class="my-2 rounded border-b-4 border-blue-700 bg-blue-500 px-3 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
          // onClick={() =>
          //     setConfirmationModal({
          //         text1: "Are you sure?",
          //         text2: "You will be logged out of your account.",
          //         btn1Text: "Logout",
          //         btn2Text: "Cancel",
          //         btn1Handler: () => dispatch(logout(navigate)),
          //         btn2Handler: () => setConfirmationModal(null),
          //     })
          // }
        >
          Book Appoinment
        </button>
      </div>

      {/* {confirmationModal && <ConfirmationModal modalData={confirmationModal} />} */}
    </div>
  )
}

export default Doccard
