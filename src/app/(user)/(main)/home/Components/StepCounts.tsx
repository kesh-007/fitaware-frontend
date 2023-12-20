"use client"
import React, { useEffect, useState } from 'react';

const StepCounts = () => {
    const [stepCount, setStepCount] = useState(0);

    useEffect(() => {
        const stepCountFromStorage = localStorage.getItem('stepcounts');
        const parsedStepCount = stepCountFromStorage ? parseInt(stepCountFromStorage) : 0;
        setStepCount(parsedStepCount);

        const interval = setInterval(() => {
            const stepCountFromStorage = localStorage.getItem('stepcounts');
        const parsedStepCount = stepCountFromStorage ? parseInt(stepCountFromStorage) : 0;
        setStepCount(parsedStepCount);


        }, 1500);

        return () => {
            clearInterval(interval); 
        };
    }, []); // Empty dependency array to run useEffect only once

    return (
        <div>
            <div className='mt-3'>
                <p className='text-red-500 text-4xl font-bold'>{stepCount}</p>
                <p>Moves/daily</p>
            </div>
        </div>
    );
};

export default StepCounts;
