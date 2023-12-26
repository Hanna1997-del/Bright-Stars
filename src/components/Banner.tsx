import Image from "next/image";

interface BannerProps {
    url: string;
    alt?: string
}
 
const Banner: React.FC<BannerProps> = ({url,alt}) => {
    return ( 
        <div className="lg:w-[900px]  flex lg:h-[300px]  shadow mt-10 lg:mt-36 ">
            <Image src={url} alt={alt? alt : ""} width={0} height={0} sizes="100vw"
            style={{ width: '100%', height: 'auto' }}/>
        </div>
     );
}
 
export default Banner;