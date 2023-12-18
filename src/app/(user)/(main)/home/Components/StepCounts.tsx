"use client"
import { FetchStepCounts } from '@/api';
import React, { useEffect, useState, useRef } from 'react';
import Cookies from 'universal-cookie';

const StepCounts = () => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const [stepcounts, setStepCounts] = useState(0);
    const [previoustrack, setPreviousTrack] = useState(0);
    const prevCountRef = useRef(0);

    useEffect(() => {
        if(!token) return alert("Login with no token error");
        FetchStepCounts(token.accestoken, token.refreshtoken)
            .then((res) => {
                const currentCount = res.stepCount;
                setStepCounts(currentCount);
                setPreviousTrack(currentCount);
                prevCountRef.current = currentCount;
            })
            .catch((error) => {
                
                console.error('Error fetching step count:', error);
            });

        const interval = setInterval(() => {
            FetchStepCounts(token.accestoken, token.refreshtoken)
                .then((res) => {
                    const currentCount = res.stepCount;
                    const prevCount = prevCountRef.current;

                    if (currentCount > prevCount) {
                        incrementCounter(prevCount, currentCount);
                    }
                    prevCountRef.current = currentCount;
                })
                .catch((error) => {
                    console.error('Error fetching step count:', error);
                });
        }, 15000);

        return () => {
            clearInterval(interval); 
        };
    }, []);

    const incrementCounter = (start:number, end:number) => {
        const difference = end - start;
        let current = start + 1;

        const updateCounter = () => {
            if (current <= end) {
                setStepCounts(current);
                current++;
                setTimeout(updateCounter, 100);
            }
        };

        updateCounter();
    };
    localStorage.setItem('stepCount', stepcounts.toString());


    return (
        <div>
            <div className='mt-3'>
                <p className='text-red-500 text-4xl font-bold'>{stepcounts}</p>
                <p>Moves/daily</p>
            </div>
        </div>
    );
};

export default StepCounts;
