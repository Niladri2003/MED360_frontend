import React from 'react'
import pdf_logo from "../../../../assets/Images/pdf_logo.png";

const Health_card = () => {
  return (
    <div>

        <div className="py-6 border-[1px] border-white">
        <img src={pdf_logo} alt="pdf image" className="h-24 w-20" />

        <div >
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple</button>


        <button type="button" class="text-white bg-gradient-to-r bg-purple-500 bg-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Purple</button>


        </div>
      </div>

    </div>
  )
}

export default Health_card