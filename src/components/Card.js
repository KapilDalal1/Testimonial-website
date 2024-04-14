import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


export default function Card(props) {

    let reviews = props.reviews

  return (
    <div className='flex flex-col md:relative'>
        <div className='flex flex-col md:relativerelative mx-auto md:absolute md:top-[-7rem] z-[10]'>
            <img className="aspect-square rounded-full object-cover w-[140px] h-[140px] z-40 sticky" src={reviews.image} alt="" />
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-30 left-[10px]'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-bold text-lg md:text-2xl tracking-wider capitalize'>{reviews.name}</p>
        </div>

        <div className='text-center mt-7'>
            <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>

        <div className='text-center text-slate-500 mt-4'>
            <p>{reviews.text}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

    </div>
  )
}
