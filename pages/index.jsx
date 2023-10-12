import React from 'react'
import { Inter } from 'next/font/google'
import First from './user/first'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>      
      <First/> {/* Render the Login component */}
    </div>
      </>
  )
}
