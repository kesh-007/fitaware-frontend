"use client"
import ProgressBar from "./ProgressBar";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoFootstepsSharp } from "react-icons/io5";
import { FaWeightScale } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { FetchAllData } from "@/api";
import Cookies from 'universal-cookie';

function StepsCard({value}:{value:number}){

    return (
        <div className="ml-2 mr-2 flex-[0.9] bg-gray-200  rounded-xl p-2 flex items-center justify-between flex-col">
            <div className="flex w-full p-2 items-center">
                <div className="flex gap-5 items-center">
                    <div className="bg-white p-2 rounded text-red-500">
                        <IoFootstepsSharp />
                    </div>
                    <p className="font-bold text-gray-500">Step Count</p>
                </div>
            </div>
            <div>
                <p className="text-5xl" >{value}</p>
            </div>
            <div className="flex w-full justify-between px-3">

            </div>
        </div>
    )

}

function CaloriesCard({value}:{value:any}){
    return (
        <div className={"p-4 bg-gray-200 mr-2 ml-2  rounded-xl"}>
                    <div className="flex gap-5 items-center pb-5">
                        <div className="text-red-500 p-2 bg-white rounded">
                            <FaFireFlameCurved />
                        </div>
                        <p className="font-bold  text-gray-500">Height</p>
                    </div>
                    <div className="flex items-baseline gap-5">
                        <p className="text-4xl">{parseInt(value)}</p>
                        <p>cms</p>
                    </div>
        </div>
    )

}

function WeightCard({value}:{value:number}){
    return (
        <div className={"p-4 bg-gray-200 mr-2 ml-2  rounded-xl"}>
                    <div className="flex gap-5 items-center pb-5">
                        <div className="text-blue-500 p-2 bg-white rounded">
                            <FaWeightScale />                        
                        </div>
                        <p className="font-bold  text-gray-500">Weight</p>
                    </div>
                    <div className="flex items-baseline gap-5">
                        <p className="text-4xl">{value}</p>
                        <p className="text-gray-500">/kg</p>
                    </div>
        </div>
    );
}

export default function ProgressCharts(){

    const cookies = new Cookies();
    const token = cookies.get("token");
    const[stepcounts,setStepCounts] = useState(0);
    const [height,setHeight] = useState(0);
    const [weight,setWeight] = useState(0);

    useEffect(() => {

    FetchAllData(token.accestoken, token.refreshtoken).then((res) => {
        setStepCounts(res.lastSummedValue.step_count);
        setHeight(res.lastSummedValue.height_in_cms);
        setWeight(res.lastSummedValue.weight);
    })
        

    },[]);   

    return (
        <div className="w-full flex flex-1 p-2 py-5">
            <StepsCard value={stepcounts}/>
            <div className="flex flex-1 flex-col gap-5 ">
                <CaloriesCard value={height}/>
                <WeightCard value={weight}/>
            </div>
        </div>
    );
}