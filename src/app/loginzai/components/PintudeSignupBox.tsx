import Image from 'next/image';
import React from 'react';
import pintude from '../../assests/pintudelogo.svg'
function PintudeSignupBox() {
  return (
    <div className="max-w-[543px] h-full mx-auto p-6 bg-white border border-gray-200 rounded-md shadow-lg text-center">
      {/* Logo and Heading */}
      <div className="flex flex-col items-center mb-4">
      <Image src={pintude} alt=''/>
      </div>

      {/* Description */}
      <p className="text-xl font-medium mt-4 max-w-[339px] mx-auto">
        Create a business profile, connect with local customers, and get listed on our platform.
      </p>

      {/* Signup Button */}
      <button className="mt-6 px-6 py-2 bg-[#E78B01] text-white font-semibold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
        Signup
      </button>
    </div>
  );
}

export default PintudeSignupBox;
