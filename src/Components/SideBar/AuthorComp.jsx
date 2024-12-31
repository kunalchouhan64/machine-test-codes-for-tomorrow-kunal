import React from 'react'

const AutherCom = () => {
  return (
    <>
    <div className="flex rounded-xl items-center justify-start gap-3 w-full p-2 bg-white shadow-lg shadow-gray-300">
          <img
            className="h-14 w-14 object-cover object-center rounded-full"
            src="https://plus.unsplash.com/premium_photo-1705018500344-450a9e2d4c56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW58ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Hi Readers,</h3>
            <p className="text-sm font-[500]">Here's Your News!</p>
          </div>
        </div>
    </>
  )
}

export default AutherCom