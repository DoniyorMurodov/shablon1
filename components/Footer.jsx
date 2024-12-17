import React from 'react'
import Image from 'next/image'
import style from "../styles/Footer.module.css"
import img1 from "../public/facebook.jpg"
import img2 from "../public/twitter.png"
import img3 from "../public/youtube.png"
import img4 from "../public/instagram.png"
import img5 from "../public/in.png"


const Footer = () => {
  return (
    <div>
        <div className=" flex items-center justify-center gap-[50px] mt-[50px] mb-[50px]">
            <div className="">
            <h1 className='text-blue-700 mr-7 m-2'>Artificial Intelligence</h1>
            <p className='m-2'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
            <h1 className='m-2'>Company@gmail.com.com</h1>
            <h1 className='m-2'>Phone: (064) 332-1233</h1>
            <h1 className='m-2'>450 Wall Street, USA, New York</h1>
            </div>
            <div className="">
                <h1 className='text-white text-xl'>INFORMATION</h1>
                <h2 className='text-gray-600'>New Collection</h2>
                <h2 className='text-gray-600'>About Store</h2>
                <h2 className='text-gray-600'>Contact Us</h2>
                <h2 className='text-gray-600'>Latest News</h2>
                <h2 className='text-gray-600'>Our Sitemap</h2>
                <h2 className='text-gray-600'>Orders History</h2>
            </div>
            <div className="">
            <h1 className='text-white text-xl'>FOOTER MENU</h1>
                <h2 className='text-gray-600'>New Collection</h2>
                <h2 className='text-gray-600'>About Store</h2>
                <h2 className='text-gray-600'>Contact Us</h2>
                <h2 className='text-gray-600'>Latest News</h2>
                <h2 className='text-gray-600'>Our Sitemap</h2>
                <h2 className='text-gray-600'>Orders History</h2>
            </div>
            <div className="">
            <h1 className='text-white text-xl'>USEFUL LINKS</h1>
                <h2 className='text-gray-600'>New Collection</h2>
                <h2 className='text-gray-600'>About Store</h2>
                <h2 className='text-gray-600'>Contact Us</h2>
                <h2 className='text-gray-600'>Latest News</h2>
                <h2 className='text-gray-600'>Our Sitemap</h2>
                <h2 className='text-gray-600'>Orders History</h2>
            </div>
            <div className="">
            <h1 className='text-white text-xl'>ABOUT THE STORE</h1>
            <p className='m-2'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
            <h1 className='m-2'>www.company.com</h1>
            <div className=" flex gap-10">
                <Image className='w-10' src={img1} alt="" />
                <Image className='w-10' src={img2} alt="" />
                <Image className='w-10' src={img3} alt="" />
                <Image className='w-10' src={img4} alt="" />
                <Image className='w-10' src={img5} alt="" />
            </div>
            <h1 className='m-2'>English</h1>

            </div>
        </div>
    </div>
  )
}

export default Footer