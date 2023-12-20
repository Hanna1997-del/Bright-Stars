"use client";
import Banner from "@/components/Banner";
import CardTag from "@/components/CardTag";
import Image from "next/image";
import { useState } from "react";

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
 ]
const newfeed: React.FC<newfeedProps> = () => {
    const[card,setCard] = useState(Cardlist)
    return ( 
      
      <div className="max-w-[1440px]  m-2 bg-gray-100 h-full flex flex-col justify-center items-center">
     <div className="relative ">
     <Banner url={"/images/Rectangle 2.png"} alt="Banner2"  />
     <div >
        <div className="absolute top-[144px] left-0">
        <img src={"/images/Rectangle 3.png"} alt="Rectangle" className="h-[300px] w-[412px]" />
        <div className="absolute  text-white top-16 left-6 w-[284px] ">
        <h1 className="font-bold text-5xl">News Feeds</h1>
        <p className="text-3xl pt-4">Get updates about us here</p>
        </div>
        </div>
     </div>
     </div>
     <div className="grid grid-cols-3 mt-8 gap-5 cursor-pointer">
     {card.map((cd)=> (
        <CardTag img={cd.img} tag1={cd.tag1} tag2={cd.tag2} />
      ))}
     </div>
      </div>
      
     );
}
 
export default newfeed;