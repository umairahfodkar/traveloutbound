import React from 'react';
import iti1 from '../assets/images/iti1.png';
import iti2 from '../assets/images/iti2.png';
import iti3 from '../assets/images/iti3.png';
import iti4 from '../assets/images/iti4.png';
import iti5 from '../assets/images/iti5.png';
import iti6 from '../assets/images/iti6.png';
import iti7 from '../assets/images/iti7.png';
import iti8 from '../assets/images/iti8.png';

export default function Itenary() {
  const itineraries = [
    { image: iti1, text: 'Kerala' },
    { image: iti2, text: 'Uttarakhand' },
    { image: iti3, text: 'Darjeeling' },
    { image: iti4, text: 'Kashmir' },
    { image: iti5, text: 'South Africa' },
    { image: iti6, text: 'Dubai' },
    { image: iti7, text: 'France' },
    { image: iti8, text: 'Ladakh' },
  ];

  return (
    <div className="flex flex-wrap p-4 lg:p-7">
      {itineraries.map((itinerary, index) => (
        <div key={index} className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2 sm:p-7 relative">
          <div className="relative">
            <img src={itinerary.image} alt={`Itinerary ${index + 1}`} className="w-full" />
            <div className="absolute bottom-0 left-0 w-full ">
              <p className="text-white font-bold text-center text-2xl p-2">{itinerary.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
