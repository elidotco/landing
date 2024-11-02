import React from 'react'

const HeroSection = () => {
  return (
    <section className='flex justify-between py-20  pt-32 flex-col  lg:flex-row  lg::h-screen'>
    {/* Text */}
    <div className="flex lg:w-1/2 pb-36 flex-col my-auto ">
        <h1 className=' text-[2rem] text-center lg:text-6xl'>
        Effortlessly Manage Your Workforce With Hours 
        </h1>
        <p className='text-xl text-center font-light pt-5'>
        “Simplify attendance tracking, payroll processing, and leave management - all in one platform.”
        </p>
    </div>
    <div className="lg:w-1/2 w-full pb-1 relative h-fit pt-64  ">
   <img alt='image1' src='/dash.png' className='h-auto absolute top-0 lg:top-1/4 right-1/2 rotate-[-45deg] w-1/4  rounded-xl'/>
   <img alt='image1' src='/human.png' className='h-auto absolute bottom-0 right-8  w-1/3  '/>
   <img alt='image1' src='/dashb.png' className='h-auto absolute bottom-0 right-[30%]  w-[40%]  '/>
   

    </div>
    {/* Text */}

    </section>
  )
}

export default HeroSection