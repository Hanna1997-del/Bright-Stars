interface CardTagProps {
   
    img: string;
    
    tag1?:string;
    tag2?:string;
    alt?: string;
}
 
const CardTag: React.FC<CardTagProps> = ({img,tag1, tag2,alt}) => {
    return ( 
        <div className="  relative">

          <img src={img} alt={alt? alt : ""} className="min-w-[200px] min-h-[200px] lg:max-w-[293px] lg:max-h-[303px]" />
          <div className="absolute ml-3 lg:ml-0 left-18 top-24 lg:top-36 lg:left-28">
           {tag1 || tag2? (<div className="min-w-[20px] min-h-[10px] lg:w-[45px] lg:h-[22px]   flex gap-3 text-[#FFFFFF]">

             <p className="text-sm font-bold  bg-[#E53637] px-2 rounded-lg  ">{tag1}</p>
             <p className="text-sm font-bold bg-[#E53637] px-2 rounded-lg ">{tag2}</p>
           </div>):""}
          </div>
        </div>
     );
}
 
export default CardTag;