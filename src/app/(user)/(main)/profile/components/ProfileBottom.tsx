'use client'
import React,{useState} from 'react';
import { GoGoal } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { IoFitnessSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import ProfileDialog from './ProfileDialog';
const ProfileBottom =()=>{
    return (
      <div>
        <div className="flex-col mb-10 mt-3 items-center">
          <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center">
            <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
              <GoGoal />
            </div>
            <div className="flex flex-1 font-semibold p-2">
              <p>Goal</p>
            </div>
            <ProfileDialog>
              <div className="p-2 rounded bg-slate-200  ">
                <IoIosArrowForward />
              </div>
            </ProfileDialog>
          </div>
          <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center mt-3">
            <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
              <IoFitnessSharp />
            </div>
            <div className="flex flex-1 font-semibold p-2">
              <p>Workout History</p>
            </div>
            <Link href={"/"}>
              <div className="p-2 rounded bg-slate-200  ">
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
          <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center mt-3">
            <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
              <IoIosSettings />
            </div>
            <div className="flex flex-1 font-semibold p-2">
              <p>Settings</p>
            </div>
            <Link href={"/"}>
              <div className="p-2 rounded bg-slate-200  ">
                <IoIosArrowForward />
              </div>
            </Link>
          </div>
          <div className="flex flex-1 mx-5 border p-2 rounded-xl items-center mt-3">
            <div className="rounded-full bg-slate-400 px-3 py-3 flex justify-center items-center">
              <GoGoal />
            </div>
            <div className="flex flex-1 font-semibold p-2">
              <p>View Goals</p>
            </div>
            <Link href={"/"}>
              <div className="p-2 rounded  text-black flex justify-center bg-slate-400">
                view
              </div>
            </Link>
          </div>
        </div>
        ;
      </div>
    );
};
  export default ProfileBottom;
