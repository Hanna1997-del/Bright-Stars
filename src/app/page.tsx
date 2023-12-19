"use client";
import Banner from '@/components/Banner';
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='w-screen bg-gray-100 h-[100vh] flex flex-col justify-center items-center ' >
      
    
    
     
    
     <Banner url={'/images/home-banner.png'} alt='Bright Star Education'/>
    <div className='w-[65%] mt-5'>
    <h1 className='font-bold text-2xl'>About Bright Stars</h1>
     <p className='text-md leading-6 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Enim nulla ut sequi tempora autem excepturi facere odio sunt fugit? 
       Nam ea hic officia eius, nihil sunt harum aliquam ex labore voluptatibus
        eos esse. Nesciunt, at explicabo? Sit beatae debitis, exercitationem
       doloremque libero facere dignissimos esse facilis ipsam. Ex, voluptas officia?</p>
    </div>
    
    
      
    </main>
  )
}
