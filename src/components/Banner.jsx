import React from 'react';
import banner from '../assets/images/banner.png';
import { HashLink as Link } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production';

export default function Banner() {
  return (
    <div className="relative mt-12">
      <img src={banner} alt="Banner" className="w-full h-[150px] sm:h-auto object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center flex flex-col sm:flex-row items-center h-full">
          <div className="p-3 sm:p-8">
            <h2 className="sm:text-5xl text-white text-center sm:text-start font-bold">
              PLAN YOUR <br />
              <span className="block">NEXT HOLIDAY</span>
            </h2>
          </div>
          <div className="p-3 sm:p-8">
            <button className="bg-white text-lg hover:bg-blue-100 text-[#11B99F] font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-xl">
              <Link to='#contactuss'>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
