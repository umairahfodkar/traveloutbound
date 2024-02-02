import React from 'react';
import ourservices from '../assets/images/ourservices.png';
import ourser1 from '../assets/images/ourser1.png';
import ourser2 from '../assets/images/ourser2.png';
import ourser3 from '../assets/images/ourser3.png';
import ourser4 from '../assets/images/ourser4.png';
import ourser5 from '../assets/images/ourser5.png';
import ourser6 from '../assets/images/ourser6.png';


// Sample images
const ServiceImages = [
  ourser1,
  ourser2,
  ourser3,
  ourser4,
  ourser5,
  ourser6,
  // Include other images similarly
];

// Sample text for each service
const ServiceTexts = [
  'Flights',
  'Hotels',
  'Visas',
  'Packages',
  'Travel Insurance',
  'Flights'
  // Add other service texts as needed
];

export default function Ourservices() {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${ourservices})`, height: '600px' }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-5xl font-bold text-white mb-6">OUR SERVICES</h1>
        <div className="flex flex-wrap justify-center">
          {ServiceTexts.map((text, index) => (
            <div key={index} className="w-1/2 sm:w-1/3  p-3 sm:p-2">
              <div className="bg-white  rounded-lg py-3 sm:py-4 mb-4 flex flex-col items-center justify-center">
                {/* Image */}
                <div className="h-16 w-16 mb-2">
                  <img src={ServiceImages[index]} alt={text} />
                </div>

                {/* Text */}
                <p className="text-center font-semibold text-xl text-[#005393]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
