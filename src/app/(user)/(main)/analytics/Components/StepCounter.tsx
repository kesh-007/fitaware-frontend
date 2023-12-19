"use client"
import React, { useEffect, useState } from 'react'
import  Cookies  from 'universal-cookie';


const StepCounter = () => {
    const [stepCount,setStepCounts] = useState('');
    useEffect(() => {
      const timeout = setTimeout(() => {
          const updatedStepCount = localStorage.getItem('stepCount')||'';
          setStepCounts(updatedStepCount);
      }, 3000);

      return () => {
          clearTimeout(timeout);
      };
  }, []);


    return (
    <div>
              <div className='flex items-center justify-center flex-col'>
          <p className='text-8xl font-bold'>{stepCount}</p>
          <p className='text-gray-400'>MOVES/days</p>
      </div>

    </div>
  )
}

export default StepCounter