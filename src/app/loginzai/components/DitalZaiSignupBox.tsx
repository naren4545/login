import Image from 'next/image';
import React from 'react';
import digitalZai from '../../assests/digitalZaiLogo.svg'
function DitalZaiSignupBox() {
  return (
    <div className="max-w-[543px] h-full mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-lg text-center">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center mb-4 min-h-[92px]">
      <Image src={digitalZai} className='' alt=''/>
      </div>

      {/* Description */}
      <p className="text-xl font-medium mt-4  mx-auto">
      Join the Pollzai and Careerzai community today! 
Whether you're here to participate in polls, 
surveys, or to explore job opportunities.      </p>

      {/* Signup Button */}
      <button className="mt-6 px-6 py-2 bg-[#00389E] text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
        Signup
      </button>
    </div>
  );
}

export default DitalZaiSignupBox;
