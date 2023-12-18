"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PhoneNumber from "./PhoneNumber";
import { navlinks } from "./Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";



interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    const router = useRouter();
    return ( 
        <footer aria-label="Site Footer" className="mt-10 bg-gray-200 ">
      <div className="py-5">
        <div className=" flex flex-col md:flex-row justify-between items-center center-content-area">
          <div className="flex flex-row md:flex-col w-[full] md:w-[6rem] gap-5 items-center md:items-start">
            <div
              className={cn(
                "nav-brand bg-white p-2 rounded shadow h-max",
                "w-[10%]"
              )}
            >
              <Image src="/images/logo.png" alt="bsip logo" width={100} height={100} />
            </div>
            <div
              className={cn(
                "nav-brand bg-white p-2 rounded shadow h-max",
                "scale-[1.1]"
              )}
            >
              <Image src="/images/pearson-edexcel.png" alt="bsip logo" width={100} height={100} />
            </div>
            <div
              className={cn(
                "nav-brand bg-white p-2 rounded shadow h-max",
                "scale-[1.1]"
              )}
            >
              <Image src="/images/dica-logo.png" alt="bsip logo" width={100} height={100} />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-10 md:mt-0 text-center md:text-left">
            <PhoneNumber branch="Yangon Branch" phone="09 799 599 699" />
            <PhoneNumber branch="Bago Branch" phone="09 299 509 600" />
            <PhoneNumber branch="Pathein Branch" phone="09 799 599 785" />
            <PhoneNumber branch="Magway Branch" phone="09 799 599 655" />
            <PhoneNumber branch="Head Office" phone="09 539 3206" />
            <div className="w-full border-t border-t-black my-2"></div>
            <h2 className="text-lg">Bright Star International</h2>
            <p>Copyright &copy; {(new Date()).getFullYear()}. All rights reserved. </p>
          </div>
          <div className="hidden flex-col gap-2 md:flex">
            <div className="font-bold mb-2">
              <h3 className="text-lg">Build Today Live Better!</h3>
              <h5>We are Bright Stars</h5>
            </div>
            {navlinks.map((link, index) => (
              <Link
                href={link.url}
                className={cn(
                  "font-bold",
                  router.asPath == link.url && "text-active"
                )}
                key={index}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
     );
}
 
export default Footer;