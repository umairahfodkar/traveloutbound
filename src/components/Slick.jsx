import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import turkey from '../assets/images/Turkey (1).png';
import paris from '../assets/images/Paris (1).png';
import india from '../assets/images/India.png';
import greece from '../assets/images/Greece (1).png';
import dubai from '../assets/images/Dubai (1).png';
import bali from '../assets/images/Bali (1).png';
import africa from '../assets/images/Africa (1).png';

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '60px',
    
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
    afterChange: (current) => {
      setActiveSlide(current);
    },
  };

  const images = [turkey, paris, india, greece, dubai, bali, africa];
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} arrow-bg next-arrow`} onClick={onClick} 
      style={{
        color: 'white', // Set arrow color to black
        backgroundColor: '#11B99F', // Set circular background color to green
        borderRadius: '50%', // Make the background circular
        width: '40px', // Adjust width to create a circular shape
        height: '40px', // Adjust height to create a circular shape
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}>
        Next
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} arrow-bg prev-arrow`} onClick={onClick} 
      style={{
        color: 'black', // Set arrow color to black
        backgroundColor: '#11B99F', // Set circular background color to green
        borderRadius: '50%', // Make the background circular
        width: '40px', // Adjust width to create a circular shape
        height: '40px', // Adjust height to create a circular shape
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}>
        Prev
      </div>
    );
  };
  return (
    <div className="flex justify-center  items-center  ">
      <Slider {...settings} className="w-4/5 ">
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
              margin: '0 100px', // Add margin to create space between slides
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
