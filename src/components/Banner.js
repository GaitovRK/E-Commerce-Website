import React, { useState } from 'react'


import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

const Banner = () => {

  let [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (currentSlide) = currentSlide - 1);
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (currentSlide) = currentSlide + 1);
  }

  return (
    <div className='w-full h-300 overflow-x-hidden'>
      <div className=' w-screen h-[650px] relative'>
        <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className=' flex transition-transform duration-500'>
          <img 
            className='w-500 h-full flex ' 
            src={data[currentSlide]}
            alt='Discount' 
            loading='priority'/>;
          <img 
            className='w-500 h-full flex ' 
            src={data[1]}
            alt='Discount'/>;
          <img 
            className='w-500 h-full flex ' 
            src={data[2]}
            alt='Discount'/>;
        </div>

        <div className=' absolute bottom-44 gap-8 flex w-fit mx-auto left-0 right-0'>
          <div onClick={prevSlide}  className=' hover:cursor-pointer justify-center flex items-center '> 
            <BsFillArrowLeftCircleFill  size={50} color='rgb(251 146 60)'/>

          </div>
          <div onClick={nextSlide} className=' hover:cursor-pointer justify-center items-center flex'> 
            <BsFillArrowRightCircleFill size={50} color='rgb(251 146 60)'/>

          </div>

          
        </div>
        
      </div>
    </div>
  )
}

export default Banner