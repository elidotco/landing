import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import {IoLogoInstagram} from 'react-icons/io5'
import {RiTwitterXFill} from 'react-icons/ri'
import {PiTiktokLogoThin} from 'react-icons/pi'
import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='w-full mt-20 flex flex-col md:flex-row justify-between '>

<div className="lg:w-1/4 px-10 lg:px-5 flex flex-col rounded-lg bg-[#f68900] py-5  justify-between">
<p className='pb-5'>Contact Information</p>

<div className="flex flex-col pb-10  text-left text-sm font-light gap-5">
   
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
 
 {/* SOcial Icons */}
 <div className="flex gap-2">
    <div className="flex justify-center items-center p-1">
        <IoLogoInstagram size={22}/>
    </div>
    <div className="flex justify-center items-center p-1">
    <RiTwitterXFill size={22}/>
    </div>
    <div className="flex justify-center items-center p-1">
    <PiTiktokLogoThin size={22}/>
    </div>
 </div>
 {/* SOcial Icons */}
</div>
<div className=" w-full lg:w-3/4 h-full">
<div className=" text-white py-10 lg:p-8 w-full rounded-lg">
      <form className='w-full'>
        {/* First Name and Last Name */}
        <div className="w-full flex gap-4">
          <div className='w-1/2'>
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder=" "
              className="w-full p-2  border-b-2 bg-transparent border-gray-600 outline-none focus:border-yellow-500"
            />
          </div>
          <div className='w-1/2'>
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2  border-b-2 bg-transparent border-gray-600 outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {/* Email and Phone Number */}
        <div className="grid grid-cols-2 gap-4 mt-10 pt-10 ">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder=" "
              className="w-full p-2  border-b-2 bg-transparent border-gray-600 outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 012 3456 789"
              className="w-full p-2  border-b-2 bg-transparent border-gray-600 outline-none focus:border-yellow-500"
            />
          </div>
        </div>

        {/* Subject (Radio Buttons) */}
        <div className="mt-4 pt-10 pb-10">
          <span className="block text-sm font-medium mb-2">Select Subject?</span>
          <div className="flex flex-col lg:flex-row gap-2 space-x-4">
            {[...Array(4)].map((_, i) => (
              <label key={i} className="inline-flex items-center">
                <input
                readOnly
                  type="radio"
                  name="subject"
                  className="form-radio text-yellow-500"
                  checked={i === 0} // Initially check the first radio button
                />
                <span className="ml-2">General Inquiry</span>
              </label>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Write your message.."
            rows="1"
            className="w-full p-2 bg-transparent border-b-2 border-gray-600 outline-none focus:border-yellow-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6 w-full flex justify-end ">
          <button
            type="submit"
            className="text-white py-2 px-3  bg-[#f68900] ml-auto rounded-lg hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
</div>
    </section>
  )
}

export default Contact








