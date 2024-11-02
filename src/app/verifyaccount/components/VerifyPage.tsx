import Image from 'next/image'
import React from 'react'
import image from '../../assests/verifypageimage.png'
import UniqueIDComponent from './UniqueIDComponent'
export default function VerifyPage() {
  return (
    <div className='min-h-[screen]'>
     <Image src={image} className='w-full pb-5' alt=''/>
<div className='text-center'>

<h1 className='text-[36px] font-semibold'>Please Verify Your Account</h1>
<p className='text-2xl'>Please complete the verification process by sending the provided code via SMS.</p>

</div>
<UniqueIDComponent/>
    </div>
  )
}
