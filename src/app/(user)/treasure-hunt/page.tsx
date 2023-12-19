"use client";
import { useEffect, useState } from "react";
import StepCount from "./Components/StepCount";
import Steps from "./Components/Steps";
import NavigationBar from "./Components/NavigationBar";
import ProgressCharts from "../(main)/analytics/Components/ProgressCharts";

export default function TreasureHunt(){

  const [progress, setProgress] = useState(10);


  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const hints = [
    {
      hint : "asldkalsndalksndlaknsldknalskndalknsdlkansldkn asdbasdkjnasd olasdn",
    },
    {
      hint : "asldkalsndalksndlaknsldknalskndalknsdlkansldkn asdbasdkjnasd olasdn",
    },
    {
      hint : "asldkalsndalksndlaknsldknalskndalknsdlkansldkn asdbasdkjnasd olasdn",
    },
    {
      hint : "asldkalsndalksndlaknsldknalskndalknsdlkansldkn asdbasdkjnasd olasdn",
    },
    {
      hint : "asldkalsndalksndlaknsldknalskndalknsdlkansldkn asdbasdkjnasd olasdn",
    },
  ]

  return (
    <div className="h-screen flex flex-col overflow-y-scroll" >
      <NavigationBar />
      <div className="relative h-screen">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-end  flex-col items-center pb-10">
            
            <div className="bg-red-200 rounded-[10em] relative flex justify-center items-center">
              <div  className="bg-gray-100 flex absolute p-[3.5rem] py-[4.5rem] rounded-[8rem]">
                <p className="text-transparent">askdjad</p></div>
              <StepCount progress={progress}/>
            </div>
        </div>
      </div>
      
      {/* <div className="flex flex-[0.15] bg-gray-300"/> */}
      
      <div className="pb-5">
        <ProgressCharts />
        <Steps 
          progress = {progress}
          hints={hints}
        />
      </div>
      
      
            
    </div>
  );

}