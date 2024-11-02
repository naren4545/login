import React from 'react'
import style from './signupzai.module.css'
import PintudeSignupBox from './PintudeSignupBox'
import DitalZaiSignupBox from './DitalZaiSignupBox'
import Link from 'next/link'
export default function SignupZai() {
  return (
    <div className={`${style.bgGeerPattern} min-h-screen`}>

        <div className='text-center min-h-[30vh] md:min-h-[50vh] flex items-center flex-col justify-center'>
      <h1 className='text-4xl  font-semibold'>Signupzai</h1>
      <p className='text-xl pb-6'>Welcome to Signupzai!<br/>
      Empower Your Business or Find Local Experts!</p>
      </div>


      <div className='grid md:grid-cols-2 grid-cols-1  gap-4 max-w-[1200px] mx-auto'>

<div className=' h-full '>
<PintudeSignupBox/>
</div>

<div className=' h-full'>
<DitalZaiSignupBox/>
</div>
      </div>

      <p className='pt-6 text-center'>Already have an account? <Link href="/loginzai" className='text-white'>LoginZai</Link></p>
    </div>
  )
}
