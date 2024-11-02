"use client";
import Image from "next/image";
import React, { useState } from "react";
import eye from '../assests/basil_eye-closed-outline.svg'
import eyeOpen from '../assests/basil_eye-outline.svg'
import Link from "next/link";
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" flex items-center justify-center h-full ">
      <div className=" p-8 rounded-lg  w-full max-w-md">
        <h1 className="text-5xl font-semibold text-center mb-6">Login</h1>

        <form className="space-y-6">
          {/* Phone Number */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-xl  font-medium">
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
            <label htmlFor="password" className="block text-xl  font-medium">
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
              {showPassword ?   <Image alt="" src={eyeOpen} className="inline"/>:<Image alt="" className="inline" src={eye}/>}
            </span>
            </div>
          </div>

          {/* Remember Me and Forget Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
            className="form-checkbox h-4 w-4 text-[#F6830E]"
              />
              <span className="ml-2 text-sm">Remember Me</span>
            </label>
            <Link href="/resetpassword" className="text-[#F6830E] text-sm">
              Forget password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#F6830E] text-white font-semibold rounded-full hover:bg-orange-600 transition"
          >
            Login
          </button>

          {/* Sign Up */}
          <div className="text-center text-xl mt-4">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-[#F6830E] font-semibold">
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
