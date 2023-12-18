"use client"
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GetWalkSteps7 } from '@/api';
import Cookies from 'universal-cookie';
import { FaWalking } from "react-icons/fa";


export default function Graph() {
    const cookies = new Cookies();
    const token = cookies.get("token");
    const [formattedStepCounts, setFormattedStepCounts] = useState([]);
    const [xLabels, setXLabels] = useState([]);
    const [pData, setPData] = useState([]);
    const [color, setColor] = useState("#F64D41"); // Default color

    useEffect(() => {
        GetWalkSteps7(token.accestoken, token.refreshtoken).then((data) => {
            const stepCounts = data.formattedStepCounts.map((entry:any) => entry.step_count);
            const increasing = isIncreasing(stepCounts);
            setFormattedStepCounts(data.formattedStepCounts);
            setXLabels(data.formattedStepCounts.map((entry:any) => entry.date.slice(0, 11)));
            setPData(stepCounts);

            setColor(increasing ? "#00FF00" : "#F64D41");
        });
    }, []);

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
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart
                    width={500}
                    height={200}
                    data={formattedStepCounts}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="step_count" stroke={color} fill={color} />
                </AreaChart>
            </ResponsiveContainer>
            <div>
            </div>
        </div>
    );
}
