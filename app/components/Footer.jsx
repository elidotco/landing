import React from 'react'
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline"

const Footer = () => {
  return (
   <div className='w-full'>
    <div className='w-32 mx-auto h-12 mb-5'>
            <img alt='logo' src='./logo.png' className=' w-full h-full'/>
        </div>
<footer className='text-white w-full flex justify-between py-5 items-center border-t-2  border-white gap-20'>

<div className="flex flex-col text-left text-sm font-light gap-5">
    <h3 className='text-lg font-normal'>Reach Us</h3>
    <div className="flex gap-2">
       <PhoneIcon className='w-5 h-5'/> 
       <p>+1012 3456 789</p>
    </div>
    <div className="flex gap-2">
       <EnvelopeIcon className='w-5 h-5'/> 
       <p>costumercare@hourss.com</p>
    </div>
    <div className="flex gap-2">
       <MapPinIcon className='w-5 h-5'/> 
       <p>19th Kofi Annan Street</p>
    </div>
   
</div>
<div className="flex flex-col text-left text-sm font-light gap-5">
    <h3 className='text-lg font-normal'>Company</h3>
       <p>About</p>
       <p>Contact us</p>
       <p>Blog</p>
</div>
<div className="flex flex-col text-left text-sm font-light gap-5">
    <h3 className='text-lg font-normal'>Legal</h3>
       <p>Privacy Policy</p>
       <p>Terms & Services</p>
       <p>Terms of use</p>
</div>
<div className="flex-1">
    <div className="mr-auto">
        
    </div>
</div>
    </footer>
   </div>
  )
}

export default Footer