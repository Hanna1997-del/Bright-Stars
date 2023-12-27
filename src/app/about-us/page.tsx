"use client";
import Banner from "@/components/Banner";
import VisitFacebook from "@/components/VisitFacebook";
import Link from "next/link";
import { useState } from "react";

interface aboutUsProps {}

const aboutUs: React.FC<aboutUsProps> = () => {
   
    
      
    
  return (
    <div className="max-w-[1440px] m-2  h-full flex flex-col justify-center items-center">
      <Banner url={"/images/home-banner.png"} alt="aboutUs-banner" />

      <div className="mr-32 lg:mr-[25rem] mt-16 relative">
        <h1 className="font-bold text-4xl lg:text-5xl pl-7 lg:pl-10">About Us</h1>
        <div className="border-l-[10px] lg:border-l-[13px] border-l-red-500 h-[2rem] lg:h-[2.5rem] absolute top-0 left-0"></div>
      </div>
      <div className="ml-[2rem] max-w-[600px] mt-5">
        <p className="text-xl lg:text-2xl ">
          Croucher Science Week is a free festival that brings science closer to
          the everyday lives of young people in Hong Kong.
        </p>
        <p className="text-lg lg:text-xl pt-5  space-y-6">
          Through online events, live programmes and bilingual workshops, we
          create opportunities for people to ask questions, gain insights and
          think deeply about science and our world. <br />
          Since 2018 our annual events have reached and inspired over 295,000
          students, parents, and teachers.
          <br />
          Our schools programme supports teachers with online workshops and
          downloadable resources.
          <br />
          We are part of Croucher Foundation, an independent private foundation
          dedicated to promoting the standard of the natural sciences,
          technology and medicine in Hong Kong.
          <br />
          We work in partnership with the Education Bureau and the Hong Kong
          Science Museum to jointly organise Croucher Science Week.
          <br />
          This festival is for the whole community. Croucher Science Week would
          not be the same without the continued support and commitment of all
          the teachers, parents and students who have participated. Thank you!
          <br />
          All events are free. Tickets available from 4 March 2024.
        </p>
      </div>

      <VisitFacebook/>
    </div>
  );
};

export default aboutUs;
