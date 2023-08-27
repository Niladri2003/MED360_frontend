import React from 'react'
import { useState } from 'react'



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




const Doccard = () => {

    // const [confirmationModal, setConfirmationModal] = useState(null)

    return (


        <div className='grid grid-cols-1 lg:grid-cols-3  md:grid-col-2 gap-8'>
            <div className=' bg-white rounded-md p-4 flex flex-col items-center  transform transition duration-500 hover:scale-110'>
                <div>
                    <img src='https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png' alt='photo user' className=' h-24 rounded-full border-4	border-yellow-100 '></img>
                </div>
                <div id="title " className=' font-bold text-xl mt-4 text-black px-4 '>Dr. Niladri Adak</div>
                <div id="subtitle" className=' text-sm text-gray-500 text-black mt-1'>GYNOCOLIGIST</div>
                <div id="subtitle" className='text-gray-500 text-pure-greys-400 text-xs mt-2 '>MBBS | WBHUS | MD</div>
                {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div> */}


                <button class="bg-blue-500 hover:bg-blue-400 text-white my-2 font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded"
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

            <div className=' bg-white rounded-md p-4 flex flex-col items-center  transform transition duration-500 hover:scale-110'>
                <div>
                    <img src='https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png' alt='photo user' className=' h-24 rounded-full border-4	border-yellow-100 '></img>
                </div>
                <div id="title " className=' font-bold text-xl mt-4 text-black px-4 '>Dr. Niladri Adak</div>
                <div id="subtitle" className=' text-sm text-gray-500 text-black mt-1'>NEUROLOGIST</div>
                <div id="subtitle" className='text-gray-500 text-pure-greys-400 text-xs mt-2 '>MBBS | WBHUS | MD</div>
                {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div> */}


                <button class="bg-blue-500 hover:bg-blue-400 my-2 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Book Appoinment
                </button>

            </div>

            <div className=' bg-white rounded-md p-4 flex flex-col items-center  transform transition duration-500 hover:scale-110 '>
                <div>
                    <img src='https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png' alt='photo user' className=' h-24 rounded-full border-4	border-yellow-100 '></img>
                </div>
                <div id="title " className=' font-bold text-xl mt-4 text-black px-4 '>Dr. Niladri Adak</div>
                <div id="subtitle" className=' text-sm text-gray-500 text-black mt-1'>ONCOLOGIST</div>
                <div id="subtitle" className='text-gray-500 text-pure-greys-400 text-xs mt-2 '>MBBS | WBHUS | MD</div>
                {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven  years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div>
                */}

                <button class="bg-blue-500 hover:bg-blue-400 my-2 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Book Appoinment
                </button>

            </div>

            <div className=' bg-white rounded-md p-4 flex flex-col items-center  transform transition duration-500 hover:scale-110'>
                <div>
                    <img src='https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png' alt='photo user' className=' h-24 rounded-full border-4	border-yellow-100 '></img>
                </div>
                <div id="title " className=' font-bold text-xl mt-4 text-black px-4 '>Dr. Niladri Adak</div>
                <div id="subtitle" className=' text-sm text-gray-500 text-black mt-1'>CARDIOGIST</div>
                <div id="subtitle" className='text-gray-500 text-pure-greys-400 text-xs mt-2 '>MBBS | WBHUS | MD</div>
                {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div> */}


                <button class="bg-blue-500 hover:bg-blue-400 my-2 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Book Appoinment
                </button>

            </div>

            <div className=' bg-white rounded-md p-4 flex flex-col items-center  transform transition duration-500 hover:scale-110'>
                <div>
                    <img src='https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png' alt='photo user' className=' h-24 rounded-full border-4	border-yellow-100 '></img>
                </div>
                <div id="title " className=' font-bold text-xl mt-4 text-black px-4 '>Dr. Niladri Adak</div>
                <div id="subtitle" className=' text-sm text-gray-500 text-black mt-1'>Dermatologist</div>
                <div id="subtitle" className='text-gray-500 text-pure-greys-400 text-xs mt-2 '>MBBS | WBHUS | MD</div>
                {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div>
 */}

                <button class="bg-blue-500 hover:bg-blue-400 my-2 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Book Appoinment
                </button>

            </div>

            <div className=' bg-white rounded-md p-4 flex flex-col items-center transform transition duration-500 hover:scale-110'>
                <div>
                    <img src='https://www.clipartmax.com/png/middle/119-1196258_toonarific-clipart-gallery-woman-silhouette-question-mark.png' alt='photo user' className=' h-24 rounded-full border-4	border-yellow-100 '></img>
                </div>
                <div id="title " className=' font-bold text-xl mt-4 text-black px-4 '>Dr. Niladri Adak</div>
                <div id="subtitle" className=' text-sm text-gray-500 text-black mt-1'>Radiologist</div>
                <div id="subtitle" className='text-gray-500 text-pure-greys-400 text-xs mt-2 '>MBBS | WBHUS | MD</div>
                {/* <div id="subtitle" className=' text-sm text-gray-500 text-pure-greys-700 text-center my-2 '>A Board Certified Family Doctor <br /> with  seven years of clinical <br />experience, specializing in patient <br /> care, case management  family <br />medicine, and communication</div> */}


                <button class="bg-blue-500 hover:bg-blue-400 my-2 text-white font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Book Appoinment
                </button>

            </div>




            {/* {confirmationModal && <ConfirmationModal modalData={confirmationModal} />} */}

        </div>
    )
}

export default Doccard;