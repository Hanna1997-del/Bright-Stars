import Link from "next/link";

interface VisitFacebookProps {
    
}
 
const VisitFacebook: React.FC<VisitFacebookProps> = () => {
    return ( 
        <div className="bg-gray-200 hover:bg-red-500  hover:text-white  max-w-[700px] rounded-lg min-h-[150px] ml-4 lg:ml-28 mt-8 grid grid-cols-1 lg:grid-cols-2 pt-5 pl-8 ">
        <h3 className="font-bold text-xl mr-3 lg:mr-0 ">
          Stay in the loop! Subscribe to keep up with the latest from Croucher
          Science Week.
        </h3>
       <div className="ml-16 mt-10  mb-3 lg:mb-0">
      
       <button className="border border-black hover:border-white  p-1 rounded-xl font-bold"
      
     
       
       >  <Link href={"https://www.facebook.com/brightstarsinternationalschool"}>Our Facebook Page</Link> </button>
      
    
       </div>
      </div>
     );
}
 
export default VisitFacebook;