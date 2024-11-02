import React from 'react'
import ResetFormPage from './components/ResetFormPage'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from "next/navigation";
export default function Page() {
  return (
    <div>
    <ResetFormPage/>
    </div>
  )
}
