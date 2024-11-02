"use client"
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LoginForm from "./LoginForm";
import imgtop from "../assests/Group 408.png";
import SignupForm from "../signup/components/SignUpForm";



export default function Login() {

  const pathname = usePathname(); 


  return (


    
    <div className="gear-pattern">
      <div className="flex lg:flex-row lg:items-center flex-col-reverse max-w-[1300px] mx-auto h-full lg:min-h-screen ">
        <div className=" lg:w-1/2 w-full">
          <LoginForm />
        </div>
        <div className="login-text lg:w-1/2 w-full h-full ">
          {/* <div className="gear-pattern md:w-[80vw] lg:w-[70vw] xl:w-[68vw]"></div> */}
          <div className="h-full flex items-center justify-end ">
            <div className=" max-w-[460px] text-center mx-auto lg:mx-0 relative text-white lg:text-right lg:pb-14 p-4">
              <Image alt="" className="absolute  top-[-143px]" src={imgtop} />
              <h1 className="text-6xl leading-[72px] font-r font-semibold">
                Welcome back to Pintude!
              </h1>
              <p className="font-r text-xl">
                Please log in to access your account and manage your business
                profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
