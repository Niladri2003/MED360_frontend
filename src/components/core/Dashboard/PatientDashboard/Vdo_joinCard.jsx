import React from 'react'
import "../PatientDashboard/Table.css"

const Vdo_joinCard = () => {
    return (
      

        <div className="table-wrapper overflow-hidden">
            <table className="table rounded-md  mx-3  border-b-2  ">
                <thead>
                    <tr>
                        <th className=' border-l-2 border-r-2 '>Patients Name</th>
                        <th className='border-r-2  ' >Details</th>
                        <th className='border-r-2 ' >Payment</th>
                        <th className='border-r-2 w-[100%] ' >Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='border-r-2  text-white '>Rohan Bannerje</td>
                        <td className="expand flex flex-row gap-3 border-r-2  ">
                            <p className='text-center flex items-center  text-white  '>Age : 41</p>
                            <button type="button"
                        className="px-2 py-2 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform ">View Health Report</button>
                        </td>
                        <td className='border-r-2'>
                            <span className='bg-caribbeangreen-400 rounded-md px-4 py-2 outline-none shadow-lg text-bold text-white'> 
                                Sucessfull
                            </span>
                        </td>
                        <td className="fit">
                            <span className="actions ">
                            <button type="button"
                        className="px-8 py-2 bg-caribbeangreen-400  rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform ">Join</button>
                            </span>
                        </td> 
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Vdo_joinCard