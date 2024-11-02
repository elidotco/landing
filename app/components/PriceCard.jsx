import { CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const PriceCard = () => {
  return (
    <div className='w-full flex flex-col items-center pb-14 lg:w-[32%]'>
        <p className='text-xl font-medium'>
          <span className='  text-[#f68900] '>$9 per User</span><span className='text-sm'>
          /month
          </span>
          <br/>
        Small Organizations</p>
        <div className="flex flex-col pt-5 gap-0">
           <div className="flex py-2 gap-1">
           <div className='p-1 rounded-full bg-[#f68900] bg-opacity-50'>
           <CheckIcon className='w-4 h-4 '/></div><p>  Time Tracking         </p>
           </div>
           <div className="flex py-2 gap-1">
           <div className='p-1 rounded-full bg-[#f68900] bg-opacity-50'>
           <CheckIcon className='w-4 h-4 '/></div><p>Attendance </p>
           </div>
           <div className="flex py-2 gap-1">
           <div className='p-1 rounded-full bg-[#f68900] bg-opacity-50'>
           <CheckIcon className='w-4 h-4 '/></div><p>Leave Mangement</p>
           </div>
           <div className="flex py-2 gap-1">
           <div className='p-1 rounded-full bg-[#f68900] bg-opacity-50'>
           <CheckIcon className='w-4 h-4 '/></div><p>Mobile Access </p>
           </div>
           <div className="flex py-2 gap-1">
           <div className='p-1 rounded-full bg-[#f68900] bg-opacity-50'>
           <CheckIcon className='w-4 h-4 '/></div><p> Analytic  Dashboard </p>
           </div>
           <div className="flex py-2 gap-1">
           <div className='p-1 rounded-full bg-[#f68900] bg-opacity-50'>
           <CheckIcon className='w-4 h-4 '/></div><p>  Time Tracking         </p>
           </div>
        </div>
       <div className="pt-5 w-1/2 lg:w-full"></div>
       <Link href='/#' className='text-center lg:w-full rounded-3xl px-5 lg:px-3 py-2 text-sm mt-10 bg-[#f68900] transition-all duration-100 hover:bg-[#f6991f]'>
        <span>Contact Sales</span>
        </Link>
    </div>
  )
}

export default PriceCard