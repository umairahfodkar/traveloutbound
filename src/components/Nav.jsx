import React from 'react'
import logo from '../assets/images/nav.png';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";



export default function Nav() {
    let Links =[
        {name:"HOME",link:"/Aboutus"},
        {name:"ABOUT US",link:"/"},
        {name:"SERVICES",link:"/"},
        {name:"ITINERARY",link:"/"},
        {name:"CONTACT US",link:"/"},
    ]
    

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#E6E7E9] py-4 md:px-10 px-7 '>
        <div className='flex items-center '>
            <img src={logo}
              alt="logo" />

        </div>
        <div className='text-3xl absolute right-8 top- cursor-pointer md:hidden'>
        <CiMenuBurger />
        <IoMdClose />

        </div>
        <ul className='md:flex md:items-center mb:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
            {
                Links.map((link)=>(
                    <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                    </li>
                ))
            }
        </ul>
        </div>  
    </div>
  )
}
