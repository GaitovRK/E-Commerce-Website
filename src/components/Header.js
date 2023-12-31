import React from 'react'
import {logoDark} from '../assets/index'
import {cartImg} from '../assets/index'


const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800'>
      <div className=' max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <div>
          <img className='h-16' src={logoDark} alt=''/>
        </div>

        <div className='flex gap-8 items-center'>
          <ul className='flex gap-8 items-center'>
            <li className='text-base text-black font-titleFont hover:text-orange-900 hover:underline underline-offset-2 hover:underline decoration-[1px] cursor-pointer duration-300'>Home</li>
            <li className='text-base text-black font-titleFont hover:text-orange-900 hover:underline underline-offset-2 hover:underline decoration-[1px] cursor-pointer duration-300'>Pages</li>
            <li className='text-base text-black font-titleFont hover:text-orange-900 hover:underline underline-offset-2 hover:underline decoration-[1px] cursor-pointer duration-300' >Shop</li>
            <li className='text-base text-black font-titleFont hover:text-orange-900 hover:underline underline-offset-2 hover:underline decoration-[1px] cursor-pointer duration-300' >Element</li>
            <li className='text-base text-black font-titleFont hover:text-orange-900 hover:underline underline-offset-2 hover:underline decoration-[1px] cursor-pointer duration-300' >Blog</li>
          </ul>

          <div className='relative'>
            <img className='h-8' src={cartImg} alt=''/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header