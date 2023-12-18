// import Image from "next/image";
"use client";
import {DATA} from "../data/dummy";
// import Link from "next/link";
// import {useRouter} from "next/navigation"

export default function Workout(){

    // const router = useRouter();

    const handleClick = () => {
        // router.push("/home/Workouts" , {data : DATA[0].poster})
    }

    return (
            <div className="relative m-5 rounded-2xl  bg-green-500" onClick={handleClick}>
            <div className="p-5 absolute top-0 bottom-0 left-0 rounded-2xl right-0 bg-gradient-to-t from-black  to-transparent">
                <div className="text-white text-5xl flex flex-1 h-full flex-col gap-5 justify-end">
                    <p>{DATA[0].title}</p>
                    <p className="text-lg">{DATA[0].content}</p>
                </div>
            </div>
            <img 
                src={DATA[0].poster} 
                // width={200} 
                // height={200} 
                alt="loading"

                className="object-cover rounded-2xl h-[25rem] w-full"
            />
        </div>
    );

}