


// import React from 'react';
// import HeroImage from '../assets/heroImage.png';

// const Home = () => {
//   return (
//     <div name="home" className='w-full h-screen flex items-center justify-center'>
//       <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
//         <div className='flex flex-col justify-center h-full md:pr-8 mr-16'>
//           <span className='text-slate-200 font-signature '>Hi, I am</span>
//           <h2 className='font-name text-5xl sm:text-7xl text-slate-100 p-3 '>
//             ARCHIT       
//           </h2>
//           <h2 className='font-name text-5xl sm:text-7xl text-slate-100 p-3'>
//              SALOKHE       
//           </h2>
//           <h3 className='text-2xl font-signature text-slate-200 p-3 ml-24'>a junior software developer</h3>
          
//         </div>
//         <div className='mt-8 md:mt-0'>
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-2xl mx-auto w-2/3 md:w-72"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import HeroImage from '../assets/heroImage.png';

const Home = () => {
  return (
    <div name="home" className='w-full h-screen flex flex-col items-center justify-center'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4'>
        <div className='flex flex-col justify-center items-center h-full md:pr-8 md:items-start'>
          <span className='text-slate-200 font-signature mb-4 md:mb-0'>Hi, I am</span>
          <h2 className='font-name text-5xl sm:text-7xl text-slate-100 p-3 text-center md:text-left'>
            ARCHIT       
          </h2>
          <h2 className='font-name text-5xl sm:text-7xl text-slate-100 p-3 text-center md:text-left'>
             SALOKHE       
          </h2>
          <h3 className='text-2xl font-signature text-slate-200 p-3 ml-24 text-center md:text-left'>a junior software developer</h3>
        </div>
        <div className='mt-8 md:mt-0'>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-72"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
