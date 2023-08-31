import React from 'react'
const Upload_form = () => {
    return (

        <div>
            <form className='ml-4 '>
                <label className='text-white mt-4'>Upload Health Record :
                    <input type="file" className='rounded-md mt-4' />
                </label>
                <button type="button"
                    className="px-11 py-2  mt-4 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
                >
                 Upload   
                </button>
            </form>
        </div>

    )
}

export default Upload_form