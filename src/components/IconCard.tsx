import { ReactNode } from "react";

interface IconCardProps {
    icon: ReactNode;
    title: string;
    className? : string;
    info?:string;
}
 
const IconCard: React.FC<IconCardProps> = ({icon,title,info,className}) => {
    return ( 
        <div
        className={[
          "bg-white p-3 flex flex-col py-10 gap-5 justify-center items-center mb-5 ",
          className ? className : "",
        ].join(" ")}
      >
        <div className="w-[5rem] h-[5rem] rounded-[50%] shadow-lg">
          {icon}
          {/* <AcademicKnowledgeIcon color="#E53638" /> */}
        </div>
        <h5 className="pt-3">{title}</h5>
        <h5 className="pt-3">{info}</h5>
       
      </div>
     );
}
 
export default IconCard;