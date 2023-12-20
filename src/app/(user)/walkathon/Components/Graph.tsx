"use client"
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Cookies from 'universal-cookie';
import { FaWalking } from "react-icons/fa";


export default function Graph() {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const [formattedStepCounts, setFormattedStepCounts] = useState([]);
    const [xLabels, setXLabels] = useState([]);
    const [pData, setPData] = useState([]);
    const [color, setColor] = useState("#F64D41"); // Default color

    

    const isIncreasing = (data:any) => {
        for (let i = 1; i < data.length; i++) {
            if (data[i] < data[i - 1]) {
                return false;
            }
        }
        return true;
    };

    return (
        <div className=' mx-5 mt-5 pl-2 rounded-lg w-full'>
            <div>
            </div>
        </div>
    );
}
