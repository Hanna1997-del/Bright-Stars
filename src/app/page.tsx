"use client";
import Banner from '@/components/Banner';
import IconCard from '@/components/IconCard';
import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import AcademicKnowledgeIcon from '../../icons/AcademicKnowledgeIcon';
import PersonalGrowthIcon from '../../icons/PersonalGrowthIcon';
import RespectIcon from '../../icons/RespectIcon';
import SocialResponsibilityIcon from '../../icons/SocialResponsibilityIcon';

export default function Home() {
  return (
    <main className='max-w-[1440px]  m-2 bg-gray-100 h-full flex flex-col justify-center items-center ' >
      
    
      
     
    
     <Banner url={'/images/home-banner.png'} alt='Bright Star Education'/>
    <div className='lg:w-[65%] max-w-[100%] mt-5'>
    <h1 className='font-bold text-2xl'>About Bright Stars</h1>
     <p className='text-md leading-6 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Enim nulla ut sequi tempora autem excepturi facere odio sunt fugit? 
       Nam ea hic officia eius, nihil sunt harum aliquam ex labore voluptatibus
        eos esse. Nesciunt, at explicabo? Sit beatae debitis, exercitationem
       doloremque libero facere dignissimos esse facilis ipsam. Ex, voluptas officia?</p>

       <section className="flex flex-col gap-2 lg:grid lg:grid-cols-2 lg:gap-6 mt-7">
            <h2 className="lg:col-span-2 font-bold text-2xl mb-3">Our Mission</h2>
            <IconCard
              title="Academic Knowledge"
              icon={<AcademicKnowledgeIcon color="#E53638" />}
            />
            <IconCard
              title="Personal Growth"
              icon={<PersonalGrowthIcon color="#E53638" />}
            />
            <IconCard title="Respect" icon={<RespectIcon color="#E53638" />} />
            <IconCard
              title="Social Responsibility"
              icon={<SocialResponsibilityIcon color="#E53638" />}
            />
          </section>
    </div>
    
    
      
    </main>
  )
}
