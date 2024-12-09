import React from 'react';
const currentDate = new Date();
const Date_Time = () => {
    return (
        <div className=' flex justify-between items-center h-40 w-full border-2 text-white px-12 '>
            <p className='text-white'>Date: {currentDate.toLocaleDateString()}</p>
            <p className='text-white'>Time: {currentDate.toLocaleTimeString()}</p>
        </div>
    )
}

export default Date_Time