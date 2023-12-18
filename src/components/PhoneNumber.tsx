import { BsTelephoneFill } from "react-icons/bs";
interface PhoneNumberProps {
    branch: string;
    phone: string;
}
 
const PhoneNumber: React.FC<PhoneNumberProps> = ({branch,phone}) => {
    return ( 
        <div className="flex flex-col md:flex-row gap-0 md:gap-2 items-center w-full mt-3 md:mt-0">
        <h5 className="text-lg font-bold md:mr-2">{branch}</h5>
        <span className="flex items-center gap-1"><BsTelephoneFill />&nbsp;{phone}</span>
      </div>
     );
}
 
export default PhoneNumber;