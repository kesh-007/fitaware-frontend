import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

function CardHeader(){

    return (
        <div className="text-xl">
            <FaRegHeart/>
        </div>
    );

}

function Avatar(){

    return (
        <div className="flex gap-5 items-center">
            <Image alt="avatar" src={require("../../(main)/search/2.jpg")} className="h-[2rem] w-[2rem] rounded-[4rem]"/>
            <div className="flex text-white text-sm" >
                <p>MrFit</p>
            </div>
        </div>
    );

}

export default function PostCard(props:any){

    return (
        <div className="px-4">
            <div className="relative">
                <div 
                    className="absolute rounded-lg top-0 left-0 right-0 bottom-0 flex flex-col justify-between"
                    style={{backgroundColor : "rgba(0,0,0,0.45)"}}
                > 
                    <div className="flex justify-end">
                        <div className="p-5">
                            <CardHeader/>
                        </div>
                    </div>
                    <div className="p-4 flex justify-end w-full text-lg justify-between">
                        <Avatar/>
                    </div>
                </div>
                <Image 
                    alt="loading" 
                    src={props.post}
                    className="w-full object-cover rounded-lg h-[17rem] "
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
}