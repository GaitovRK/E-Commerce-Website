import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex items-center flex-col gap-4'>
            <h1 className=' text-2xl bg-orange-400 text-white py-2 w-80 text-center'>Shopping Everyday</h1>
            <span className=' bg-black w-20 h-[3px]' />
            <p className=' max-w-[700px] text-center text-gray-600'> In our store everyone can find what he needs with the best price and the best quality. We will deliver in less than 24 hours! </p>
        </div>

        <div className=''>
            <ProductCard />
        </div>
        
    </div>
  )
}

export default Products