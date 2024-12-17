import React from 'react'
import Image from 'next/image'
import style from "../styles/Section.module.css"
import img from '../public/section1-removebg-preview.png'
import img1 from "../public/section2-removebg-preview.png"
import minsection1 from "../public/minsection1-removebg-preview.png"
import minsection2 from "../public/minsection2-removebg-preview.png"
import minsection3 from "../public/minsection3-removebg-preview.png"
import minsection4 from "../public/minsection4-removebg-preview.png"
import minsection5 from "../public/minsection5-removebg-preview.png"

import img2 from "../public/section3-removebg-preview.png"

const Section = () => {
  return (
    <div>
        <div className="flex items-center justify-center bg-blue-950 gap-[100px]">
            <div className="">
                <h1 className='text-blue-600 ml-5'>Next genaretion platform</h1>
                <p className='text-3xl text-white m-5'>Artificial intelligence <br /> & Syber security </p>
                <p className='m-5'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
                <button className='bg-blue-800 text-white pr-10 pt-3 pb-3 m-5 pl-10 text-center rounded-xl'>Get started</button>
                <button className='bg-blue-800 text-white pr-16 pt-3 pb-3 m-5 pl-10 text-center rounded-xl'>Watch video</button>
            </div>
            <div className="">
                <Image className='w-[400px]' src={img} alt="" />
            </div>
        </div>

        <div className={style.box}>
          <div className="">
          <Image className='w-[400px]' src={img1} alt="" />
          </div>
          <div className="">
          <p className='text-3xl text-white m-5'>Apply AI, Deep Learning <br /> and Data Sciece to solve</p>
          <p className='m-5'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
          <button className='bg-blue-800 text-white pr-10 pt-3 pb-3 m-5 pl-10 text-center rounded-xl'>Learn Moro</button>

          </div>
        </div>


        <div className="flex items-center justify-center gap-24 mt-40 mb-40">
          <div className=" w-[200px] bg-gray-600 rounded-lg">
            <div className="">
              <Image className='w-16 flex items-center justify-center mt-5 mb-5 ml-16' src={minsection1} alt="" />
            </div>
            <div className="">
              <h1 className='text-white mt-50px text-center'>Naxly as the Winners in <br /> Global Agency Awards</h1>
              <p className='mt-[15px] text-center'>Lorem ipsum is placeholder  <br /> commonly used in print <br /> publishing industries for <br /> layouts and visual</p>
            </div>
          </div>

          <div className=" w-[200px] bg-gray-600 rounded-lg">
            <div className="">
              <Image className='w-16 flex items-center justify-center mt-5 mb-5 ml-16' src={minsection2} alt="" />
            </div>
            <div className="">
              <h1 className='text-white mt-50px text-center'>Naxly as the Winners in <br /> Global Agency Awards</h1>
              <p className='mt-[15px] text-center'>Lorem ipsum is placeholder  <br /> commonly used in print <br /> publishing industries for <br /> layouts and visual</p>
            </div>
          </div>

          <div className=" w-[200px] bg-gray-600 rounded-lg">
            <div className="">
              <Image className='w-16 flex items-center justify-center mt-5 mb-5 ml-16' src={minsection3} alt="" />
            </div>
            <div className="">
              <h1 className='text-white mt-50px text-center'>Naxly as the Winners in <br /> Global Agency Awards</h1>
              <p className='mt-[15px] text-center'>Lorem ipsum is placeholder  <br /> commonly used in print <br /> publishing industries for <br /> layouts and visual</p>
            </div>
          </div>

          <div className=" w-[200px] bg-gray-600 rounded-lg">
            <div className="">
              <Image className='w-16 flex items-center justify-center mt-5 mb-5 ml-16' src={minsection4} alt="" />
            </div>
            <div className="">
              <h1 className='text-white mt-50px text-center'>Naxly as the Winners in <br /> Global Agency Awards</h1>
              <p className='mt-[15px] text-center'>Lorem ipsum is placeholder  <br /> commonly used in print <br /> publishing industries for <br /> layouts and visual</p>
            </div>
          </div>

          <div className=" w-[200px] bg-gray-600 rounded-lg">
            <div className="">
              <Image className='w-16 flex items-center justify-center mt-5 mb-5 ml-16' src={minsection5} alt="" />
            </div>
            <div className="">
              <h1 className='text-white mt-50px text-center'>Naxly as the Winners in <br /> Global Agency Awards</h1>
              <p className='mt-[15px] text-center'>Lorem ipsum is placeholder  <br /> commonly used in print <br /> publishing industries for <br /> layouts and visual</p>
            </div>
          </div>
        </div>



        <div className={style.box1}>
          <div className="">
          <h1 className='text-blue-600 ml-5'>What our clients say about our awesome solutions</h1>
          <p className='m-5'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
          <p className='m-5'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
          <p className='m-5'>Lorem ipsum is placeholder text commonly used in the graphic, <br /> print, and publishing industries for previewing layouts and <br /> visual mockups.</p>
          </div>
          <div className="">
            <Image src={img2} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Section