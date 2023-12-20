"use server";
import Banner from "@/components/main/home/Banner";
import Header from "@/components/main/home/Header";
import React from "react";
// import {DATA} from "./data/dummy";
// import CategoryCard from './Components/CategoryCard';
// import Graph from '../../walkathon/Components/Graph';
import Workout from "./Components/Workout";
import Graph from "../../walkathon/Components/Graph";
import Category from "./Components/Category";
import Link from "next/link";
import { GiCycling } from "react-icons/gi";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import StepCounts from "./Components/StepCounts";

const page = () => {
  let date = new Date();

  function getMonthName() {
    let month = "";

    switch (date.getMonth()) {
      case 0:
        month = "Jan";
        break;
      case 1:
        month = "Feb";
      case 2:
        month = "Mar";
      case 3:
        month = "Apr";
      case 4:
        month = "May";
      case 5:
        month = "Jun";
      case 6:
        month = "July";
      case 7:
        month = "Augst";
      case 8:
        month = "Sep";
      case 9:
        month = "Oct";
      case 10:
        month = "Nov";
      case 11:
        month = "Dec";
    }

    return month;
  }

  const Activities = [
    {
      name: "Dumbells",
      icon: <FaDumbbell />,
    },
    {
      name: "Cycling",
      icon: <GiCycling />,
    },
    {
      name: "Swiming",
      icon: <FaPersonSwimming />,
    },
  ];

  return (
    <div className="h-screen pb-10">
      <Header />
      <div className="px-5 text-gray-400">
        <p>
          <span>
            {date.getDate()} {getMonthName()} {date.getFullYear()}
          </span>
        </p>
        <p className="text-black text-2xl font-bold">Latest Activity</p>
        <StepCounts />
      </div>

      
      <div className="pt-3">
        <Workout />
      </div>

      {/* <div className='mx-5 mt-10'>
          <p className='text-black text-2xl font-bold'>Categories</p>
          <div className='w-full bg-red-500 h-[15rem] mt-5 p-3'>
            <Category/>
          </div>
      </div> */}
      <div className="mx-5 mt-6">
        <Banner></Banner>
      </div>

      <div>
        <div className="mx-5 mt-10">
          <p className="text-black text-2xl font-bold">Health History</p>
        </div>
        <div className="font-bold py-2 pb-10">
          {/* <Graph /> */}
        </div>
      </div>
      <div className="h-[5rem]" />
    </div>
  );
};

export default page;

// category section
{
  /* <div className='p-3 font-bold'>
        <p className='text-xl py-2'>Category</p>
        <div className='flex gap-5 m-2 flex-1'>
        {
          DATA.map((value , index) => {
            return (

              <CategoryCard/>
            );
          })
        }
        </div> */
}

// health history graph
