
"use client"
import Image from "next/image";



import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";


import imgtop from '../../assests/Group 408.png'
import SignupForm from "./SignUpForm";
export default function SignUP() {
  const pathname = usePathname(); 

  return (

   
    <div className="gear-pattern2">
    <div className="flex flex-col-reverse lg:flex-row-reverse lg:items-center  max-w-[1300px] mx-auto h-full lg:min-h-screen ">

      <div className=" lg:w-1/2 w-full">
   <SignupForm/>
    
      </div>
      <div className="login-text lg:w-1/2 w-full h-full ">
      <div className="gear-pattern2 md:w-[80vw] lg:w-[67vw] xl:w-[64vw]"></div>
      <div className="h-full flex items-center  ">
      <div className=" max-w-[521px] text-center mx-auto lg:mx-0 relative text-white lg:text-left lg:pb-14 p-4">
<Image alt="" className="absolute  top-[-143px] right-0" src={imgtop}/>
        <h1 className="text-6xl leading-[72px] font-r font-semibold">Create Your 
        Pintude Account</h1>
        <p className="font-r text-xl">Join Pintude today and start building your online presence! 
        Please fill out the form to create your account.</p>
      </div>
      </div>
      </div>
    </div>
    </div>
     
  )
}