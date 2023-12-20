"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AppContext } from "../../providers/AppProvider";
import { usePathname, useRouter } from "next/navigation";


interface NavbarProps {
    
}
export const navlinks = [
    {
      url: "/",
      label: "Home",
    },
    {
      url: "/newfeed",
      label: "News Feed"
    },
    {
      url: "/about-us",
      label: "About Us",
    },
    {
      url: "/programs",
      label: "Programs",
    },
    {
      url: "/announcement",
      label: "Announcement",
    },
    // {
    //   url: "/",
    //   label: "New Feeds",
    // },
    {
      url: "/contact-us",
      label: "Contact Us",
    },
  ];
const Navbar: React.FC<NavbarProps> = () => {
   const router = useRouter();
    const {mounted} = useContext(AppContext)
    const [mobileNav, setMobileNav] = useState<boolean>(false);
    const pathName = usePathname();
    
    
    
    return ( 
      
        <>
        
        <div className="relative bg-gray-100   w-full flex justify-center">
          {/* width: 66vw;
    margin-inline: 17vw; // 34 vw
    padding-block: 1vw; */}
          <nav className="lg:absolute  flex justify-between items-center lg:w-[66vw] mx-auto py-[1vw]">
            <div className=" mt-3 w-[3.5rem] lg:mt-0 !lg:w-[6rem] hidden lg:block">
             <Image src={"/images/logo.png"} alt="bsip logo" width={50} height={50}/>
            </div>
            <ul className="gap-5 hidden lg:flex">
              {navlinks.map((link, index) => (
                <li key={index}>
                  {/* <Link href={link.url} className="text-active font-bold"> */}
                  <Link
                    href={link.url}
                    className={cn(
                      "font-bold",
                      pathName == link.url ? "text-red-500" : ""
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="absolute top-[1.7rem] right-[1rem] w-[3rem] h-[3rem] rounded-full flex  justify-center items-center shadow z-50"
            onClick={() => setMobileNav((pre) => !pre)}
          >
            <GiHamburgerMenu />
          </div>
        </div>
        <div
          className={cn(
            "fixed flex flex-col items-center gap-2 right-0 w-[100vw] h-[100vh] bg-white mt-[-100vh]",
            mounted && "transition-all duration-500 ease" ,
            mobileNav && "mt-[0vh]"
          )}
        >
          <div className=" mt-[5rem] lg:mt-0 !w-[5rem]  lg:block">
            <Image src="/images/logo.png" alt="bsip logo" width={100} height={100} />
            
          </div>
          <ul className="gap-5 flex flex-col w-full items-center mt-5">
              {navlinks.map((link, index) => (
                <li key={index}>
                  {/* <Link href={link.url} className="text-active font-bold"> */}
                  <Link
                    href={link.url}
                    className={cn(
                      "font-bold",
                      pathName == link.url && "text-active"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </>
    );
}
 
export default Navbar;