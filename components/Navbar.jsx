import React from 'react'
import style from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div>
            <div className="flex items-center justify-center bg-blue-950 h-[100px] gap-8">
                <h1 className='text-blue-700 mr-7'>Artificial Intelligence</h1>
                <a className='text-white' href="">Home </a>
                <a className='text-white' href="">About</a>
                <a className='text-white' href="">Services</a>
                <a className='text-white' href="">Blog </a>
                <a className='text-white' href="">Contact</a>
                <button className='p-2 rounded-lg text-white bg-blue-500 ml-40' type="button">Sign In</button>
            </div>
    </div>
  )
}

export default Navbar