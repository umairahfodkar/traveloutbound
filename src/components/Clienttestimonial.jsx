// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import clientbg from '../assets/images/clientbg.png';


// const ClientTestimonial = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

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

//   const testimonialData = [
//     {
//       name: 'John Doe',
//       testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       name: 'Umairah Fodkar',
//       testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       name: 'Rahila Fodkar',
//       testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       name: 'Tulsi Gupta',
//       testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       name: 'Jagruti',
//       testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
//       image: 'https://via.placeholder.com/150',
//     },
//     {
//       name: 'Sachin',
//       testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
//       image: 'https://via.placeholder.com/150',
//     },
//   ];

//   return (
//     <div className="flex justify-center items-center  bg-gray-200">
//       <Slider {...settings} className="w-4/5">
//         {testimonialData.map((testimonial, index) => (
//           <div
//             key={index}
//             className={`w-full p-4 rounded-md bg-white shadow-lg`}
//             style={{
//               zIndex: activeSlide === index ? 10 : 1,
//               minWidth: '400px', // Adjust the minimum width if needed
//               minHeight: '300px', // Adjust the minimum height if needed
//               opacity: activeSlide === index ? 1 : 0.5, // Change opacity for inactive slides
//             }}
//           >
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="mx-auto h-20 w-20 rounded-full object-cover mb-4"
//             />
//             <p className="mb-4">{testimonial.testimonial}</p>
//             <p className="font-bold">{testimonial.name}</p>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default ClientTestimonial;



import React, { useState } from 'react';
import Slider from 'react-slick';
import { useMediaQuery } from '@react-hook/media-query';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import clientbg from '../assets/images/clientbgg.png';
import clientimg from '../assets/images/clientimg.png';
import clientimg2 from '../assets/images/client2.png';
import clientimg3 from '../assets/images/client3.png';
import test1 from '../assets/images/test1.jpg';
import test2 from '../assets/images/test2.jpg';
import test3 from '../assets/images/test3.png';
import test4 from '../assets/images/test4.png';
import test5 from '../assets/images/test5.png';
import test6 from '../assets/images/test6.png';




import { RiDoubleQuotesR } from 'react-icons/ri';

const ClientTestimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { matches: isTablet } = useMediaQuery('(max-width: 768px)');
  const { matches: isMobile } = useMediaQuery('(max-width: 480px)');
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} arrow-bg next-arrow`} onClick={onClick} 
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
          marginRight: '50px', 
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
        zIndex: 999, // Increase the z-index to ensure it's above the slider content
      marginLeft: '40px', 
      }}>
        Prev
      </div>
    );
  };


  const settings = {
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
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
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialData = [
    {
      name: 'Manoj Pahuja',
      testimonial: 'Very good support and guidance from you Nishant throughout the trip, Thankyou very much, God bless you dear.',
      image:test3,
    },
    {
      name: 'Pratixa',
      testimonial: 'Thankyou for all your efforts. Our trip was truly joyful and blessed with divine love and light. We look forward to connecting with you again for another trip. My sincere gratitude to you and full team.',
      image: test4,
    },
    {
      name: 'Abhishek Shukla',
      testimonial: "Thank you for arranging everything.. We had a wonderful experience through Travel Outbound you made my Marriage Anniversary special in Goa.. Trip was memorable❤️",
      image: test5,
    },
    {
      name: 'Mrs Usha and Mr Vijay Patel',
      testimonial: 'Our Kerela trip was awesome, and all arrangements were great..We enjoyed a lot',
      image: test6,
    },
   
  ];

  return (
    <div
      className="relative overflow-hidden  flex justify-center my-4 items-center mt-8 p-6 bg-cover mb-6  testimonial-slider"
      style={{
        backgroundImage: `url(${clientbg})`,
        
      }}
    >
      <div className="sm:w-4/5 relative  overflow-hidden z-10">
        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`relative w-full  p-4 border-b-8 border-[#11B99F] bg-white shadow-2xl ${
                activeSlide === index ? 'scale-150' : 'scale-100'
              }`}
              style={{
                zIndex: activeSlide === index ? 10 : 1,
                minWidth: isTablet ? '300px' : isMobile ? '200px' : '400px',
                minHeight: isTablet ? '200px' : isMobile ? '150px' : '300px',
                padding: isMobile ? '1rem' : isTablet ? '2rem' : '3rem 2rem', // Adjust padding here
              }}
            >
              <div className="absolute top-0 right-5   sm:right-16 transform -translate-x-1/2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto h-14 w-14  sm:h-20 sm:w-20 rounded-full object-cover mb-4 -mt-8"
                />
              </div>

              <div className="">
                <div className="text-blue-800 mb-4  text-right">
                  <div className="flex justify-end">
                    <RiDoubleQuotesR className="sm:text-7xl" />
                  </div>
                </div>
              </div>

              <p className="mb-4 text-xs sm:text-xs text-center">{testimonial.testimonial}</p>
              <p className="font-bold flex text-xs sm:text-l  justify-end">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientTestimonial;
