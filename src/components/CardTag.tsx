interface CardTagProps {
   
    img: string;
    
    tag1?:string;
    tag2?:string;
    alt?: string;
}
 
const CardTag: React.FC<CardTagProps> = ({img,tag1, tag2,alt}) => {
    return ( 
        <div className="  relative">

          <img src={img} alt={alt? alt : ""} className="w-[293px] h-[303px]" />
          <div className="absolute  top-36 left-32">
           {tag1 || tag2? (<div className=" w-[45px] h-[22px]   flex gap-3 text-[#FFFFFF]">

             <p className="text-sm font-bold  bg-[#E53637] rounded-lg  ">{tag1}</p>
             <p className="text-sm font-bold bg-[#E53637] rounded-lg ">{tag2}</p>
           </div>):""}
          </div>
        </div>
     );
}
 
export default CardTag;