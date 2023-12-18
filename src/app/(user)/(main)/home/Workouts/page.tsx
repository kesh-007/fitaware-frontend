"use client";
// import Image from "next/image";
import NavigationBar from "./Components/NavigationBar"
import { WorkoutExcersise } from "./Components/WorkoutExcersise";
// import {useRouter} from "next/navigation";


export default function Workouts(){


    return (
        <div className="h-screen">
            <NavigationBar/>
            <div className="h-[15rem] bg-red-500">
                        {/* <p>asdjbfsdfhb</p>   */}
                        <WorkoutExcersise/>
            </div>
        </div>
    );

}