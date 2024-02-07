// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import logo from '../assets/images/nav.png';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='flex justify-between items-center py-4 sm:h-24 w-full mx-auto bg-[#E6E7E9] px-2 sm:px-4 text-black'>
//       <img className='w-[200px] sm:w-[300px]' src={logo} alt="" />
      
//       <ul className='hidden md:flex'>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-green-500 hover:cursor-pointer'>HOME</li>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-green-500 hover:cursor-pointer'>ABOUT US</li>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-green-500 hover:cursor-pointer'>SERVICES</li>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-green-500 hover:cursor-pointer'>ITINERARY</li>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-green-500 hover:cursor-pointer'>CONTACT</li>
//       </ul>
      
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
      
//       <ul className={nav ? 'fixed z-50 left-0 top-0 w-[60%] h-full bg-[#E6E7E9] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[white] m-4'></h1>
//         <li className='p-4 hover:text-green-500 hover:cursor-pointer'>HOME</li>
//         <li className='p-4 hover:text-green-500 hover:cursor-pointer'>ABOUT US</li>
//         <li className='p-4 hover:text-green-500 hover:cursor-pointer'>SERVICES</li>
//         <li className='p-4 hover:text-green-500 hover:cursor-pointer'>ITINERARY</li>
//         <li className='p-4 hover:text-green-500 hover:cursor-pointer'>CONTACT US</li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import logo from '../assets/images/nav.png';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className='flex justify-between items-center py-4 sm:h-24 w-full mx-auto bg-[#E6E7E9] px-2 sm:px-4 text-black'>
//       <img className='w-[200px] sm:w-[300px]' src={logo} alt="" />
      
//       <ul className='hidden md:flex'>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-green-500 hover:cursor-pointer'>
//           <NavLink exact to="/" activeClassName="text-green-500">HOME</NavLink>
//         </li>
//         <li className='p-4  font-bold text-xl text-[#005393] hover:text-green-500'>
//           <NavLink to="/about" activeClassName="text-green-500">ABOUT US</NavLink>
//         </li>
//         <li className='p-4  font-bold text-xl text-[#005393] hover:text-green-500'>
//           <NavLink to="/service" activeClassName="text-green-500">SERVICES</NavLink>
//         </li>
//          <li className='p-4  font-bold text-xl text-[#005393] hover:text-green-500'>
//           <NavLink to="/itenary" activeClassName="text-green-500">ITENERARY</NavLink>
//         </li>
//         <li className='p-4  font-bold text-xl text-[#005393] hover:text-green-500'>
//           <NavLink to="/contact" activeClassName="text-green-500">CONTACT US</NavLink>
//         </li>
//       </ul>
      
//       <div onClick={handleNav} className='block md:hidden'>
//         {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
      
//       <ul className={nav ? 'fixed z-50 left-0 top-0 w-[60%] h-full bg-[#E6E7E9] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//         <h1 className='w-full text-3xl font-bold text-[white] m-4'></h1>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-[#11B99F] hover:cursor-pointer'>
//           <NavLink exact to="/home" activeClassName="text-green-500"onClick={handleNav}>HOME</NavLink>
//         </li>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-[#11B99F] hover:cursor-pointer'>
//           <NavLink to="/about" activeClassName="text-green-500" onClick={handleNav}>ABOUT US</NavLink>
//         </li>
//         <li className='p-4 font-bold text-xl text-[#005393] hover:text-[#11B99F] hover:cursor-pointer'>
//           <NavLink to="/service" activeClassName="text-green-500" onClick={handleNav}>SERVICES</NavLink>
//         </li>
//         <li className='p-4  font-bold text-xl text-[#005393] hover:text-[#11B99F]'>
//           <NavLink to="/itenary" activeClassName="text-green-500" onClick={handleNav}>ITENERARY</NavLink>
//         </li>
//         <li className='p-4  font-bold text-xl text-[#005393] hover:text-[#11B99F]'>
//           <NavLink to="/contact" activeClassName="text-green-500"  onClick={handleNav}>CONTACT US</NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;






import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/images/navv.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNav(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className='flex justify-between  items-center py-4 sm:h-24 w-full mx-auto bg-[#E6E7E9] px-2 sm:px-4 text-black'>
      <img className='w-[300px] sm:w-[400px]' src={logo} alt="" />
      
      <ul className='hidden lg:flex'>
        <li className={`p-4 font-bold text-xl text-[#005393] ${activeLink === '/' ? 'text-green-500' : ''}`}>
          <NavLink exact to="/" onClick={() => handleLinkClick('/')}>HOME</NavLink>
        </li>
        <li className={`p-4 font-bold text-xl text-[#005393] ${activeLink === '/about' ? 'text-green-500' : ''}`}>
          <NavLink to="/about" onClick={() => handleLinkClick('/about')}>ABOUT US</NavLink>
        </li>
        <li className={`p-4 font-bold text-xl text-[#005393] ${activeLink === '/service' ? 'text-green-500' : ''}`}>
          <NavLink to="/service" onClick={() => handleLinkClick('/service')}>SERVICES</NavLink>
        </li>
        <li className={`p-4 font-bold text-xl text-[#005393] ${activeLink === '/itenary' ? 'text-green-500' : ''}`}>
          <NavLink to="/itenary" onClick={() => handleLinkClick('/itenary')}>ITINERARY</NavLink>
        </li>
        <li className={`p-4 font-bold text-xl text-[#005393] ${activeLink === '/contact' ? 'text-green-500' : ''}`}>
          <NavLink to="/contact" onClick={() => handleLinkClick('/contact')}>CONTACT US</NavLink>
        </li>
      </ul>
      
      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      
      <ul className={nav ? 'fixed z-50 left-0 top-0 w-[60%] h-screen bg-[#E6E7E9] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        {/* Mobile navigation links */}
        <li className={`p-4 font-bold  text-sm text-[#005393] ${activeLink === '/' ? 'text-green-500' : ''}`}>
          <NavLink exact to="/" onClick={() => handleLinkClick('/')}>HOME</NavLink>
        </li>
        <li className={`p-4 font-bold text-sm text-[#005393] ${activeLink === '/about' ? 'text-green-500' : ''}`}>
          <NavLink to="/about" onClick={() => handleLinkClick('/about')}>ABOUT US</NavLink>
        </li>
        <li className={`p-4 font-bold text-sm text-[#005393] ${activeLink === '/service' ? 'text-green-500' : ''}`}>
          <NavLink to="/service" onClick={() => handleLinkClick('/service')}>SERVICES</NavLink>
        </li>
        <li className={`p-4 font-bold text-sm text-[#005393] ${activeLink === '/itenary' ? 'text-green-500' : ''}`}>
          <NavLink to="/itenary" onClick={() => handleLinkClick('/itenary')}>ITINERARY</NavLink>
        </li>
        <li className={`p-4 font-bold text-sm text-[#005393] ${activeLink === '/contact' ? 'text-green-500' : ''}`}>
          <NavLink to="/contact" onClick={() => handleLinkClick('/contact')}>CONTACT US</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
