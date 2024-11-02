import React from 'react'
import { PriceCard } from '../components'

const Pricing = () => {
  return (
    <section className='lg:px-20 mt-20 pb-20'>
       <div className="lg:w-[50%]  pb-32">
       <h2 className="text-4xl font-normal text-[#f68900]">Plans & Pricing</h2>
       <p className='text-lg pt-5'>Whether your time-saving automation needs are large or small, we’re here to help you scale.</p>
       </div>

       <div className="w-full  items-center flex flex-col lg:flex-row gap-5 justify-center lg:justify-between pb-10" id='pricing-plans'>
        <PriceCard/>
        <PriceCard/>
        <PriceCard/>
       </div>
    </section>
  )
}

export default Pricing