
"use client"
import React from 'react';
import copyicon from '../../assests/copyicon.svg';
import Image from 'next/image';
import qr from '../../assests/qrCode.svg';

function UniqueIDComponent() {
  const uniqueID = "fdb60170-8e35-4963-9284-e8320ee8ecbe";
  const smsNumber = "82373 58618";

  const copyToClipboard = (text:string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1400px] my-7 mx-auto rounded-md p-6">
      {/* Left Section */}
      <div className="text-center md:border-r py-9 border-[#13A8DA]">
        <div className="pb-7">
          <p className="text-2xl font-medium pb-2">Your Unique ID:</p>
          <p className="text-2xl pb-2 text-[#E78B01] font-semibold flex justify-center items-center">
            {uniqueID}
            <span
              onClick={() => copyToClipboard(uniqueID)}
              className="ml-7 cursor-pointer"
            >
              <Image src={copyicon} alt="Copy Icon" />
            </span>
          </p>
        </div>
        <div>
          <p className="text-2xl font-medium pb-2">Send this ID via SMS to:</p>
          <p className="text-2xl pb-2 text-[#E78B01] font-semibold flex items-center justify-center">
            {smsNumber}
            <span
              onClick={() => copyToClipboard(smsNumber)}
              className="ml-7 cursor-pointer"
            >
              <Image src={copyicon} alt="Copy Icon" />
            </span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center space-y-4">
        <Image src={qr} alt="QR Code" />
        <p className="text-2xl font-medium text-center max-w-[443px]">
          Scan this QR code on your mobile to send the message
        </p>
        <p className="text-2xl text-red-600 font-semibold">Time left: 4:55</p>
      </div>
    </div>
  );
}

export default UniqueIDComponent;
