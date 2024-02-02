import React from 'react'
import InteriorLogo from '../assets/images/nav.png';
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
<img src={InstagramLogo} alt="My Image" className='w-[25px] h-[25px]'/>
<img src={FbLogo} alt="My Image" className='w-[25px] h-[25px]' />
<img src={WhatsappLogo} alt="My Image" className='w-[25px] h-[25px]' />

</div>

</div>

<div className="linksbox text-white mt-2 ml-3">
<a href="" className='block font-canada py-2 font-canada'>About Us</a>
<a href="" className='block font-canada py-2 font-canada'>Our Services</a>
<a href="" className='block font-canada py-2 font-canada'>Our Gallery</a>
<a href="" className='block font-canada py-2 font-canada'>Testimonials</a>
<a href="" className='block font-canada py-2 font-canada'>Contact Us</a>

</div>

<div className="contactinfo mt-2 ml-3">
<h2 class="text-[#005293] text-[30px]">CONTACT US</h2>

<div className="address text-white py-1">
<h6 className='font-canada'>Address</h6>
<p className='font-canada'>Lorem ipsum dolor sit amet. Ut</p>
</div>

<div className="phone text-white py-1">
<h6 className='font-canada'>Phone</h6>
<p className='font-canada'>9234567891</p>

</div>

<div className="email text-white py-1">
<h6 className='font-canada'>Email</h6>
<p className='font-canada'>Lorem ipsum </p>

</div>


</div>

</div>

</div>
)
}

export default Footer
