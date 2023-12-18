"use client";
import React from "react";
import Bar from "./bar";
import Pie from "./pie";
import Line from "./line";
import Pie2 from "./pie2";
import Bar2 from "./bar2";
import Link from "next/link";

function page() {

  const participant_count_data = [
    { data: [400, 630, 400], color: "rgba(0.5,0.5,0.5,0.2)", label: "Male" },
    { data: [250, 300, 650], color: "black", label: "Female" }
  ];
  const user_count = [
    { data: [300,700,1243,1777,2621,3221], label: 'Male',color:'rgba(0.5,0.5,0.5,0.4)' },
    { data: [20, 398, 800, 1420, 1967,2343], label: 'Female',color:'black' }
  
  ];
  const participant_count_ratio_data = [
    {
      data: [
        { value:650 ,  label: 'Walkathon'},
        { value:930 , label: 'TresureHunt' },
        { value:1050 , label: 'PostContest' },
      ],
    },
  ];
  const gender_ratio = [{
    data: [
      { id: 0, value: 500,color:'black', label: 'Male' },
      { id: 1, value: 350,color:'rgba(0.5,0.5,0.5,0.2)' ,label: 'Female' },

    ],
  }];
  const useage_details = [
    {
      data: [
        5, 2, 2, 3, 25, 35, 36, 23, 20, 18, 16, 16, 13, 10, 10, 12, 18,
        18, 15.2, 12, 10, 3, 3,
      ],
      label: "Usage Details",
      color: "rgba(0.5,0.5,0.5,0.3)",
    }
  ];


  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="md:mt-10 mt-5 flex gap-2 ml-64">
        <div>
          <div className="mb-3">
            <Bar data={participant_count_data}/>
          </div>
          <div>
            <Pie data = {gender_ratio}/>
          </div>
        </div>
      </div>
      <div className="md:mt-10 mt-5 flex gap-2 ml-4">
        <div>
          <div className="flex gap-2">
            <Line data={user_count} />
            <Pie2 data={participant_count_ratio_data}/>
          </div>
          <div className="mt-3">
            <Bar2 data={useage_details}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
