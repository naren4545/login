"use client";
import Image from "next/image";
import React, { useState } from "react";
import eye from '../../assests/basil_eye-closed-outline.svg';
import eyeOpen from '../../assests/basil_eye-outline.svg';
import Link from "next/link";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Your submit logic here
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h1 className="text-5xl font-semibold text-center mb-6">Signup</h1>

        <form className="space-y-6" onSubmit={(e)=>{handleSubmit(e)}}>
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-xl font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 placeholder:text-xs border-2 border-[#F6830E] rounded-full focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your registered phone no"
              className="w-full placeholder:text-xs p-3 border-2 border-[#F6830E] rounded-full focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Password */}
          <div className="space-y-2 relative">
            <label htmlFor="password" className="block text-xl font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full p-3 placeholder:text-xs border-2 border-[#F6830E] rounded-full focus:outline-none focus:border-orange-500"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer"
                onClick={handlePasswordToggle}
              >
                {showPassword ? <Image alt="show" src={eyeOpen} /> : <Image alt="hide" src={eye} />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="space-y-2 relative">
            <label htmlFor="confirmPassword" className="block text-xl font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-3 placeholder:text-xs border-2 border-[#F6830E] rounded-full focus:outline-none focus:border-orange-500"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer"
                onClick={handleConfirmPasswordToggle}
              >
                {showConfirmPassword ? <Image alt="show" src={eyeOpen} /> : <Image alt="hide" src={eye} />}
              </span>
            </div>
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-[#F6830E]"
            />
            <span className="ml-2 text-sm">
              I agree with <span className="text-[#F6830E]">Privacy and Policy</span>
            </span>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#F6830E] text-white font-semibold rounded-full hover:bg-orange-600 transition"
          >
            Signup
          </button>

          {/* Already have an account? */}
          <div className="text-center text-xl mt-4">
            Already have an account?{" "}
            <Link href="/" className="text-[#F6830E] font-semibold">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
