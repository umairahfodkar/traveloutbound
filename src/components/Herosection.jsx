import React, { useState } from 'react';
import herosec from '../assets/images/herosec.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import turkey from '../assets/images/turkeyyy.png';
import paris from '../assets/images/parisss.png';
import india from '../assets/images/Indiaaa.png';
import greece from '../assets/images/greecee.png';
import dubai from '../assets/images/dubaiii.png';
import bali from '../assets/images/africaaaa (2).png';
import africa from '../assets/images/africaaaa (1).png';
import Slider from 'react-slick';

export default function Herosection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '60px',
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [turkey, paris, india, greece, dubai, bali, africa];

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <img src={herosec} alt="Hero Section" className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full'>
        <h1 className='text-3xl sm:text-4xl font-bold '>
          DISCOVER THE WORLD {' '}
          <span style={{ color: '#FFCE50', display: 'block' }}>WITH TRAVEL OUTBOUND</span>
        </h1>
        <div className="flex justify-center items-center z-10 herosection-slider" style={{ top: '30%' }}>
          {/* Adjust the 'top' percentage value to move the slider up or down */}
          <Slider {...settings} className=" overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`w-full rounded-md bg-white shadow-lg transition-transform transform ${
                  activeSlide === index ? 'scale-150' : 'scale-100'
                }`}
                style={{
                  zIndex: activeSlide === index ? 10 : 1,
                  minWidth: activeSlide === index ? '400px' : 'auto',
                  minHeight: activeSlide === index ? '300px' : 'auto',
                  margin: '0 20px', // Adjusted margin for responsiveness
                }}
              >
                <img src={image} alt={`Slide ${index + 1}`} className="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
