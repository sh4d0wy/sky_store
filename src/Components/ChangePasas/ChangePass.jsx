import React from 'react'

const ChangePass = () => {
  return (
    <>
        <div className='w-[100vw] h-[100vh] absolute z-100 flex justify-center items-center'>
        <div className='w-[100vw] h-[100vh] absolute z-102 bg-gray-50'>
        </div>
        <div className='w-[30vw] h-[40vh] bg-white shadow-xl'>
                <div className='text-md'>
                    Old Password
                </div>
                <input type="text" className='w-[10vw] border-3'/>
        </div>
        </div>
    </>
  )
}

export default ChangePass