import React, { useState } from "react"

// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     pt: 2,
//     px: 4,
//     pb: 3,
//   };

const Doccard = ({ doctor }) => {
  // const [confirmationModal, setConfirmationModal] = useState(null)
  console.log(doctor)

  return (
    <div className="">
      <div className=" flex transform flex-col items-center rounded-md bg-white  p-4 transition duration-500 hover:scale-110">
        <div>
          <img
            src="https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png"
            alt="photo user"
            className=" h-24 rounded-full border-4	border-yellow-100 "
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
