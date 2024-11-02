"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

import imgtop from '../../assests/Group 408.png'
import ResetPasswordForm from "./ResetPasswordForm";
export default function Login() {

    const pathname = usePathname(); 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname} // Ensure the key is dynamic to reflect the pathname
        initial={{ opacity: 0, rotateY: -90 }} // Start off-screen flipped to the left
        animate={{ opacity: 1, rotateY: 0 }} // Flip in to upright
        exit={{ opacity: 0, rotateY: 90 }} // Exit flipped to the right
        transition={{ duration: 0.3 }} // Define the transition duration
      >
    <div className="gear-pattern">
    <div className="flex lg:flex-row lg:items-center flex-col-reverse max-w-[1300px] mx-auto h-full lg:min-h-screen ">

      <div className=" lg:w-1/2 w-full">
      <ResetPasswordForm/> 
    
      </div>
      <div className="login-text lg:w-1/2 w-full h-full ">
      <div className="h-full flex items-center justify-end ">
      <div className=" max-w-[460px] text-center mx-auto lg:mx-0 relative text-white lg:text-right lg:pb-14 p-4">
<Image alt="" className="absolute  top-[-143px]" src={imgtop}/>
        <h1 className="text-6xl leading-[72px] font-r font-semibold">Forgot Your 
        Password?</h1>
        <p className="font-r text-xl">Don't worry, we'll help you reset it!</p>
      </div>
      </div>
      </div>
    </div>
    </div>
    </motion.div>
    </AnimatePresence>
  )
}