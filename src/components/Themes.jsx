// import React from 'react';
// import Theme1 from '../assets/images/Theme1.png';
// import Theme2 from '../assets/images/Theme2.png';
// import Theme3 from '../assets/images/Theme3.png';
// import Theme4 from '../assets/images/Theme4.png';
// import Theme5 from '../assets/images/Theme5.png';

// export default function Themes() {
//   return (
//     <div className="flex flex-col mt-12 items-center justify-center">
//       <h1 className="text-center text-3xl text-[#005293] font-bold mb-8">Themes You Can Explore</h1>
//       <div className="flex flex-col gap-8 sm:flex-row justify-around">
//         {/* Container 1 */}
//         <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC]">
//           <div>
//             <img src={Theme1} alt="" />
//           </div>
//           <p className="text-center text-[#005293] font-semibold mt-2">Wild Life</p>
//         </div>
//         {/* Container 2 */}
//         <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC]">
//           <div>
//             <img src={Theme2} alt="" />
//           </div>
//           <p className="text-center text-[#005293] font-semibold mt-2">Hidden Gems</p>
//         </div>
//         {/* Container 3 */}
//         <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC]">
//           <div>
//             <img src={Theme3} alt="" />
//           </div>
//           <p className="text-center text-[#005293] font-semibold mt-2">Cruise</p>
//         </div>
//         {/* Container 4 */}
//         <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC]">
//           <div>
//             <img src={Theme4} alt="" />
//           </div>
//           <p className="text-center text-[#005293] font-semibold mt-2">Pilgrimage</p>
//         </div>
//         {/* Container 5 */}
//         <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC]">
//           <div>
//             <img src={Theme5} alt="" />
//           </div>
//           <p className="text-center text-[#005293] font-semibold mt-2">Adventure</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import Theme1 from '../assets/images/Theme1.png';
import Theme2 from '../assets/images/Theme2.png';
import Theme3 from '../assets/images/Theme3.png';
import Theme4 from '../assets/images/Theme4.png';
import Theme5 from '../assets/images/Theme5.png';

export default function Themes() {
  return (
    <div className="flex flex-col mt-14 items-center justify-center">
      <h1 className="text-center text-3xl text-[#005293] font-bold mb-8">Themes You Can Explore</h1>
      <div className="flex flex-col sm:flex-row justify-around gap-8">
        {/* Container 1 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC] mx-2">
          <div>
            <img src={Theme1} alt="" />
          </div>
          <p className="text-center text-[#005293] font-semibold mt-2">Wild Life</p>
        </div>
        {/* Container 2 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC] mx-2">
          <div>
            <img src={Theme2} alt="" />
          </div>
          <p className="text-center text-[#005293] font-semibold mt-2">Hidden Gems</p>
        </div>
        {/* Container 3 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC] mx-2">
          <div>
            <img src={Theme3} alt="" />
          </div>
          <p className="text-center text-[#005293] font-semibold mt-2">Cruise</p>
        </div>
        {/* Container 4 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC] mx-2">
          <div>
            <img src={Theme4} alt="" />
          </div>
          <p className="text-center text-[#005293] font-semibold mt-2">Pilgrimage</p>
        </div>
        {/* Container 5 */}
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 border-4 border-[#BEBCBC] mx-2">
          <div>
            <img src={Theme5} alt="" />
          </div>
          <p className="text-center text-[#005293] font-semibold mt-2">Adventure</p>
        </div>
      </div>
    </div>
  );
}

