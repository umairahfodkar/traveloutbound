import React from 'react'
import InteriorLogo from '../assets/images/footlogo.png';
import InstagramLogo from'../assets/images/instagram.png';
import FbLogo from'../assets/images/Facebook.png';
import WhatsappLogo from'../assets/images/Whatsapp.png';


const Footer = () => {
return (
<div className="footer  bg-[#11B99F]">

<div className="max-w-[1170px] mx-auto py-5 mt-8 p-3 md:flex md:justify-around">

<div className="footerlogos sm:mt-8  ">
<div className="interior-logo">
<img src={InteriorLogo} alt="My Image" className='w-[200px] bg-white p-2' />
</div>
<p class="md:text-center text-white py-2 font-canada">Social Networks</p>
<div className="social-icon-box sm:ml-14 flex gap-4">
<a href="https://www.instagram.com/_traveloutbound_?igsh=YnpibjYybnNhdzlx" target="_blank" rel="noopener noreferrer">
  <img src={InstagramLogo} alt="My Image" className='w-[25px] h-[25px]' />
</a>

<a href="https://www.facebook.com/traveloutbound97" target="_blank" rel="noopener noreferrer">
  <img src={FbLogo} alt="My Image" className='w-[25px] h-[25px]' />
</a>


</div>

</div>

<div className="linksbox text-white mt-2 ml-3">
  <a href="/about" className='block font-canada py-2 font-canada'>About Us</a>
  <a href="/service" className='block font-canada py-2 font-canada'>Our Services</a>
  <a href="/Itenary" className='block font-canada py-2 font-canada'>Our Gallery</a>
  {/* <a href="" className='block font-canada py-2 font-canada'>Testimonials</a> */}
  <a href="/contact" className='block font-canada py-2 font-canada'>Contact Us</a>
</div>


<div className="contactinfo mt-2 ml-3">
<h2 class="text-[#005293] text-[30px]">CONTACT US</h2>

<div className="address text-white py-1">
<h6 className='font-canada'>Address</h6>
<p className='font-canada'>Raghuleela Mega Mall, Kandivali (W), Mumbai 400067, Maharashtra, India</p>
</div>

<div className="phone text-white py-1">
<h6 className='font-canada'>Phone</h6>
<p className='font-canada'>9619932786</p>
<p className='font-canada'>9619932771</p>

</div>

<div className="email text-white py-1">
<h6 className='font-canada'>Email</h6>
<p className='font-canada'>info@traveloutbound.com</p>

</div>


</div>

</div>

</div>
)
}

export default Footer
