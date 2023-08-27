import React from 'react'
import pdf_logo from "../../../../assets/Images/pdf_logo.png";

const Health_card = () => {
    return (
        <div className='flex gap-5 '>

            <div className="py-6  border-[1px] bg-richblack-5 border-white rounded-lg  transform transition duration-500 hover:scale-105 p-4 flex flex-col items-center">
                

                    <img src={pdf_logo} alt="pdf image" className="h-[150px] w-[150px] " />
                 
                <div className='flex flex-col justify-center items-center '>

                    <button
                        type="button"
                        class="px-9 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex my-2"
                    >
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <span class="ml-2">View</span>
                    </button>
                    <button
                        type="button"
                        class="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex my-2"
                    >
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>

                        <span class="ml-2">Download</span>
                    </button>

                </div>
            </div>


        </div>
    )
}

export default Health_card