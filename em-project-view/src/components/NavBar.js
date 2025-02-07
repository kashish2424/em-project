import React from 'react'

export const Navbar = () => {
  return (
    <div className="bg-slate-900 h-16 px-16 py-4 items-center flex">
      <h1 className="text-3xl font-bold text-blue-500 ">  EM Service </h1>
      <div className="space-x-4 ml-auto ">
      <a className="hover:text-blue-400" href="/">Home</a>
      <a className="hover:text-blue-400" href="/">Profile</a>
      <a className="hover:text-blue-400" href="/">Logout</a>
      </div>
      
    </div>
  )

}

export default Navbar