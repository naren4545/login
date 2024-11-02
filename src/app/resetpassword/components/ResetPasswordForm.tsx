"use client";
import Link from "next/link";
import React from "react";

const ResetPasswordForm = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h1 className="text-4xl font-semibold text-center mb-6">Reset Password</h1>

        <p className="text-center text-xl mb-6 pb-6">
          Enter your registered email or phone number to receive a password reset link.
        </p>

        <form className="space-y-6">
          {/* Phone or Email Input */}
          <div className="space-y-2">
            <label htmlFor="phoneOrEmail" className="block text-xl font-medium">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneOrEmail"
              placeholder="Enter your registered phone no / email"
              className="w-full placeholder:text-xs p-3 border-2 border-[#F6830E] rounded-full focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#F6830E] text-white font-semibold rounded-full hover:bg-orange-600 transition"
          >
            Reset Password
          </button>

          {/* Resend and Back to Login Links */}
          <div className="text-center text-sm mt-4">
            If you didn’t receive the email,{" "}
            <a href="#" className="text-[#F6830E] font-semibold">
              Resend
            </a>
          </div>
          
          <div className="text-center text-sm mt-2">
            <Link href="/" className=" font-semibold">
              Back to <span className="text-[#F6830E]">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
