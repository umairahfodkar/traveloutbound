import React from 'react';
import contactus from '../assets/images/contactus.png';
import contactus2 from '../assets/images/contactus2.png';


export default function Contactus() {
  return (
    <div className="flex justify-center items-center h-auto bg-cover bg-center mt-8 " id="contactuss" style={{ backgroundImage: `url(${contactus2})` }}>
      <div className="flex justify-between flex-col sm:flex-row sm:max-w-6xl w-full p-6 bg-opacity-80">
        <div className="sm:w-2/3 relative  flex flex-col justify-center items-center sm:items-start">
          {/* <div className="absolute top-0  sm:top-28 w-1/4 sm:border-2 border-white  "></div> */}
          <h2 className="text-2xl text-white font-bold mb-4 mt-4  text-center sm:text-left">SHARE YOUR DETAILS AND LET US</h2>
          <p className='text-white text-4xl  font-bold text-center sm:text-left'>PLAN YOUR IDEAL VACATION.</p>
          {/* <div className="absolute right-56 w-1/4 sm:border-2 border-t border-white mt-28"></div> */}
        </div>
        <div className="sm:w-1/3  mt-8">
          <form  action="https://formspree.io/f/mpzvzebo"
          method="POST" className="flex flex-col">
            {/* Form elements */}
            <input type="text" placeholder="Username" name='username' required autoComplete='off' maxLength={18} className="mb-4 p-2 border  border-gray-300 rounded-md" />
            <input type="tel" placeholder="Mobile no." name='mobileno'  required  autoComplete='off' maxLength={10} className="mb-4 p-2 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email" name='email' required autoComplete='off' className="mb-4  p-2 border border-gray-300 rounded-md" />
            {/* Other form fields */}
            <label className="flex items-center mb-4  text-white">
              <input type="checkbox" className="mr-2  text-white" />
              I hereby accept the Privacy Policy and i authorise Travel Outbound company to contact me.
            </label>
            {/* Submit button */}
            <button type="submit" className="bg-[#11B99F] text-white sm:w-32 py-2 rounded-xl hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
