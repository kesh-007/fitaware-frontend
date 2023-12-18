"use client";
import { useState } from "react"
export default function Tab(){

    const [button , setButton] = useState(0);
    const [currentButton , setCurrentButton] = useState(1);

    return (
      <div className='bg-gray-200 flex p-2 gap-2 mx-4 rounded-lg'>
        <button 
            className={`${(button === 0)?"bg-white text-purple-500":"bg-transparent text-purple-500"} p-2 w-full rounded-lg`}>Daily</button>
        <button 
            className={`${(button === 1)?"bg-white":"bg-transparent"} p-2 w-full rounded-lg`}>Calendar</button>
      </div>
    )

}