import React from 'react';
import aboutus2 from '../assets/images/profile.png';
import aboutus1 from '../assets/images/aboutusimg.png';
import aboutus3 from '../assets/images/aboutusss.png';

export default function Aboutus() {
  return (
    <div className='mb-28'>
      <div className="relative">
        <img src={aboutus1} alt="About Us" className="w-full" />
        <h2 className="absolute bottom-0 left-4 text-white font-bold sm:text-8xl bg-opacity-70  px-2 py-1">
          ABOUT US
        </h2>
      </div>
      {/* section2 */}
<div className="sm:px-4 mt-4 h-full flex items-center justify-center flex-col md:flex-row text-white mx">
  {/* First Section */}
  <div className="sm:w-2/4 p-4 p sm:p-0"> {/* Adjusted width to 2/3 */}
    <p className='bg-[#11B99F]  text-white text-lg rounded-md sm:text-xl p-4'>Travel Outbound brings a wealth of expertise to seamlessly manage global holiday packages, hotel reservations, visa processing, and tours. As your trusted one-stop travel solution, we prioritize our clients and associates. Our commitment to excellence is evident in our careful selection of top talents in the industry.</p>
  </div>

  {/* Second Section */}
  <div className="sm:w-1/6 p-8 sm:p-0">
    <img src={aboutus2} alt="Description" className="max-w-full h-auto md:max-h-60" />
  </div>
</div>



      <div className="flex justify-center mt-14">
        <div className="relative w-full lg:w-4/6  rounded-lg ">
          <img
            src={aboutus3}
            alt="About Us"
            className="w-full  h-[100vh] sm:h-auto "
          />
          <div className="absolute sm:px-4  gap-4 top-0 left-0 w-full h-full flex  flex-col md:flex-row text-white">
            {/* First Section */}
            <div className="flex-1 ">
  <h3 className=" text-xl md:text-3xl font-bold text-center  text-[#E46666] bg-white sm:py-4">OUR MISSION</h3>
  <p style={{ backgroundColor: 'rgba(228, 102, 102, 0.5)' }} className='text-center p-8'>
    To deliver unparalleled service, maintain the highest quality standards, uphold integrity and transparency, and offer our clients exceptional value for their money.
  </p>
</div>


            {/* Second Section */}
            <div className="flex-1 ">
              <h3 className="text-xl md:text-3xl bg-white sm:py-4 text-center text-[#0AA54F] font-bold">OUR SERVICES</h3>
              <p  style={{ backgroundColor: 'rgba(10, 165, 79, 0.5)' }} className='text-center p-8'>Experience stress free travel with our services flights, hotels, visas, packages, and travel insurance. Our seamless bookings and personalized packages ensure a worry free and memorable journey. Let us bring your travel dreams to life.

</p>
            </div>
            {/* Third Section */}
            <div className="flex-1">
              <h3 className=" text-xl md:text-3xl bg-white text-center text-[#005293] sm:py-4 font-bold">OUR MISSION</h3>
              <p  style={{ backgroundColor: 'rgba(0, 82, 147, 0.5)' }} className='text-center p-8 '> Delivering budget-friendly yet extraordinary travel experiences, aiming for the WOW factor to generate word-of-mouth referrals and create lasting memories.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
