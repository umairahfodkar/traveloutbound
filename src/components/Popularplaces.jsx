// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import img1 from '../assets/images/img1.png';
// import img2 from '../assets/images/img2.png';
// import img3 from '../assets/images/img3.png';
// import img4 from '../assets/images/img4.png';

// const Popularplaces = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const images = [img1, img2, img3, img4];

//   const settings = {
//     slidesToScroll: 1,
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     beforeChange: (current, next) => {
//       setActiveSlide(next);
//     },
//     afterChange: (current) => {
//       setActiveSlide(current);
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-200">
//       <Slider {...settings} className="w-4/5">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={``}
//             style={{
//               zIndex: activeSlide === index ? 10 : 1,
//               minWidth: '400px', // Adjust the minimum width if needed
//               minHeight: '300px', // Adjust the minimum height if needed
//               opacity: activeSlide === index ? 1 : 0.5, // Change opacity for inactive slides
//             }}
//           >
//             <img src={image} alt={`Slide ${index + 1}`} />
            
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Popularplaces;

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import { GiNestedHearts } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";


const Popularplaces = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [img1, img2, img3, img4, img3];
  const buttons = ['SouthAfrica', 'Rajasthan', 'Maldives', 'Shimla', 'Maldives'];

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

  const settings = {
    slidesToScroll: 1,
  
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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


  return (
    <div className=''>
      <h1 className='text-center text-3xl font-bold mt-8 my-4 text-[#005293]'>POPULAR PLACES</h1>
      <div className="flex justify-center items-center popular-slider">
        <Slider {...settings} className="w-4/5">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative ${activeSlide === index ? 'z-10 opacity-100' : 'z-1 '}`}
              style={{
                minWidth: '400px',
                minHeight: '300px',
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
              <div
                className="absolute top-4 right-3"
                style={{
                  zIndex: 1,
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                 <FaHeart style={{ color: 'red' }} />
              </div>
            

              <button
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-10 py-1 rounded-md text-black cursor-pointer"
              >
                {buttons[index]}
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popularplaces;
