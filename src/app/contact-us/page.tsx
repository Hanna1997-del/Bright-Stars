

import IconCard from "@/components/IconCard";
import { FaLocationDot } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { GoMail } from "react-icons/go";



interface ContactProps {
    
}
 
const Contact: React.FC<ContactProps> = () => {
    return ( 
        <div className="max-w-[1340px]" >
        <div  className="bg-[url('/images/home-banner.png')] mt-24 relative bg-cover max-w-[1340px] h-[300px] " >
           <div className="absolute top-32 left-[35rem]">
            <h1 className="text-6xl text-white font-bold">Contact Us</h1>
           </div>
        </div>

        <div className="mt-10 text-center flex flex-col gap-3">
            <h1 className="text-red-500 text-4xl font-bold">Bright stars</h1>
            <h3 className="text-blue-700 text-3xl font-semibold">International School</h3>
            <h3 className="text-black font-bold text-3xl">Our Branches</h3>
        </div>
        
        
          <section className="flex  flex-col m-8 gap-2 lg:grid lg:grid-cols-3 lg:gap-6 mt-7">
            <h2 className="lg:col-span-3 font-bold text-2xl mb-3">Bago Branches</h2>
            <IconCard
              title="Our Location"
              info="Bright Stars (1) No 336, ShweMawDaw Pagoda Road, ShinSawPu Qt, Upper MOB Bank (near Fashion Zone), Bago "

             

                           
              icon={<FaLocationDot color="#E53638" className="text-3xl text-center" />}
            />
            <IconCard
              title="Phone Number"
              info="Ph-09799599600"
              icon={<GiSmartphone color="#E53638" className="text-3xl" />}
            />
           
            <IconCard
              title="Email Address"
              info="brightstarsmyanmar@gmail.com"
              icon={<GoMail color="#E53638" className="text-3xl" />}
            />
          </section>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975927.4485414991!2d95.70808814267278!3d17.15967175662419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c3d70752d70829%3A0x4b54d60dd498278c!2sBright%20Stars%20International%20Primary%20School!5e0!3m2!1sen!2smm!4v1703672536833!5m2!1sen!2smm" width="1340" height="450" style={{border:0}}  loading="lazy" ></iframe>
        
          <section className="flex  flex-col m-8 gap-2 lg:grid lg:grid-cols-3 lg:gap-6 mt-7">
            <h2 className="lg:col-span-3 font-bold text-2xl mb-3">Yangon Branch</h2>
            <IconCard
              title="Our Location"
              info="No.(81/A), Shwe Hnin Si Street, 9 Mile, Mayangone Tsp ,Yangon. Ph- 09799599699. Yangon, Myanmar, 11061 "

             

                           
              icon={<FaLocationDot color="#E53638" className="text-3xl text-center" />}
            />
            <IconCard
              title="Phone Number"
              info="Ph-09 799 599699"
              icon={<GiSmartphone color="#E53638" className="text-3xl" />}
            />
           
            <IconCard
              title="Email Address"
              info="brightstarsmyanmaredu@gmail.com"
              icon={<GoMail color="#E53638" className="text-3xl" />}
            />
          </section>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.022989234537!2d96.1412888737356!3d16.874757283927696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195be2015ac21%3A0x8b1e3337e44a182c!2sBRIGHT%20STARS%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2smm!4v1703673447680!5m2!1sen!2smm" width="1340" height="450" style={{border:0}}  loading="lazy" ></iframe>

          <section className="flex  flex-col m-8 gap-2 lg:grid lg:grid-cols-3 lg:gap-6 mt-7">
            <h2 className="lg:col-span-3 font-bold text-2xl mb-3">Pathein Branch</h2>
            <IconCard
              title="Our Location"
              info="No.25 , Magyi Bandan Street, 2 Quarter, Pathein , Ayeyarwady . 10011 "

             

                           
              icon={<FaLocationDot color="#E53638" className="text-3xl text-center" />}
            />
            <IconCard
              title="Phone Number"
              info="Ph-09 799 599699"
              icon={<GiSmartphone color="#E53638" className="text-3xl" />}
            />
           
            <IconCard
              title="Email Address"
              info="brightstarsmyanmar@gmail.com"
              icon={<GoMail color="#E53638" className="text-3xl" />}
            />
          </section>

          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3819.8139639365972!2d94.72884547373299!3d16.785928784002305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s25%20Magyi%20Bandan%20Rd%202%20Quarter!5e0!3m2!1sen!2smm!4v1703673947020!5m2!1sen!2smm" width="1340" height="450" style={{border:0}} loading="lazy" ></iframe>


        </div>
     );
}
 
export default Contact;