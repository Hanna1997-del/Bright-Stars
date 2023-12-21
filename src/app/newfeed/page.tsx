"use client";
import Banner from "@/components/Banner";
import CardTag from "@/components/CardTag";
import Image from "next/image";
import { useEffect, useState } from "react";

interface newfeedProps {
    
}
 const Cardlist = [
    {img: "/images/Group 11.png",
     tag1: "Education",
     tag2: "Teaching"},
     {img: "/images/Group 11.png"},
     {img: "/images/Group 11.png"},
     {img: "/images/Group 11.png"},
     {img: "/images/Group 11.png"},
     {img: "/images/Group 11.png"},
      {img: "/images/Group 11.png"},
        {img: "/images/Group 11.png"},
          {img: "/images/Group 11.png"},
    
 ]
const newfeed: React.FC<newfeedProps> = () => {
    const[card,setCard] = useState(Cardlist);
    const[visible,setvisible] = useState(6)
    
    const moreclick = ()  => {
     setvisible((preValue) => preValue+3)
      
    }
    
    
    return ( 
      
      <div className="max-w-[1440px]  m-2 bg-gray-100 h-full flex flex-col justify-center items-center">
     <div className="relative ">
     <Banner url={"/images/Rectangle 2.png"} alt="Banner2"  />
     <div >
        <div className="absolute top-[144px] left-0">
        <img src={"/images/Rectangle 3.png"} alt="Rectangle" className="hidden lg:block h-[300px] w-[412px]" />
        <div className="absolute   text-white top-4 left-3 md:top-8 md:left-16 lg:top-16 lg:left-16 w-[284px] ">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">News Feeds</h1>
        <p className="lg:text-3xl md:text-3xl pt-2 lg:pt-4">Get updates about us here</p>
        </div>
        </div>
     </div>
     </div>
     <div className="grid lg:grid-cols-3 grid-cols-2  lg:mt-8 mt-[5rem] gap-5 cursor-pointer">
     {card.slice(0,visible).map((cd,index)=> (
        <CardTag img={cd.img} tag1={cd.tag1} tag2={cd.tag2} key={index}/>
      ))} 
     </div>
     <button className="bg-[#E53637] text-[#ffffff] p-2 mt-5 rounded-lg"
     onClick={moreclick}
     >View More</button>
     
      </div>
      
     );
}
 
export default newfeed;