import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import turkey from '../assets/images/des1.png';
import paris from '../assets/images/des2.png';
import india from '../assets/images/des3.png';
import greece from '../assets/images/des4.png';

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} arrow-bg next-arrow`}
        onClick={onClick}
        style={{
          color: 'white',
          backgroundColor: '#11B99F',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'absolute',
          right: '-20px', // Adjust the position of the next arrow
          top: '50%', // Align the next arrow vertically in the middle
          transform: 'translateY(-50%)', // Center vertically
          zIndex: 999, // Increase the z-index to ensure it's above the slider content
         
        }}
      >
        Next
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} arrow-bg prev-arrow`}
        onClick={onClick}
        style={{
          color: 'black',
          backgroundColor: '#11B99F',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          position: 'absolute',
          left: '-20px', // Adjust the position of the previous arrow
          top: '50%', // Align the previous arrow vertically in the middle
          transform: 'translateY(-50%)', // Center vertically
          zIndex: 40, // Increase the z-index to ensure it's above the slider content
        marginRight: '70px', 
        }}
      >
        Prev
      </div>
    );
  };

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [turkey, paris, india, greece];

  return (
    <div className="flex flex-col items-center destination-slider">
      <Slider {...settings} className="w-4/5 relative">
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
            }}
          >
            <img src={image} alt={`Slide ${index + 1}`} className="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};


const App = () => {
  return (
    <div className="flex flex-col lg:flex-row sm:p-0 mt-24 bg-gray">
      {/* Shadow container on the left side */}
      <div className="w-full lg:w-1/5   flex justify-center lg:justify-start items-center mb-4 sm:mb-0">
        {/* Heading */}
        <div className='shadow-2xl  bg-white w-full  p-6 rounded-xl text-center lg:text-left'>
          <h1 className="text-2xl text-[#005293] font-bold mb-4">Destinations</h1>
          <p className='text-lg  mb-4'>We offer a perfect variety of experiences</p>
          {/* Button */}
          <button className="bg-[#11B99F]   hover:bg-black text-white font-bold py-2 px-4 rounded">
            Explore More
          </button>
        </div>
      </div>

     {/* Gray background belt on the right side */}
     <div className="w-full lg:w-4/5 relative   overflow-hidden">
        {/* Background belt */}
        <div className="absolute right-0 top-16 bottom-16 sm:top-28 sm:bottom-28 w-full bg-[#E6E7E9]" />
        
        {/* SliderComponent */}
        <SliderComponent />
      </div>
    </div>
  );
};
export default App;
