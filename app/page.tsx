import React from 'react'
import Component from '../components/component'
import Tabbar from '../components/ui/Tabbar'

export default function RootPage() {
  return(
    <main className='w-screen h-screen bg-[#F4FAFF] flex justify-center items-center'>
      <Tabbar />
    </main>
  )
}