import React from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";
 


const page = () => {
    return (
        <div className="flex flex-col items-center h-screen overflow-y-scroll">
            <div className="w-full flex items-center py-6 px-5">
                <IoChevronBackOutline />
                
            </div>
            <div className="flex flex-col justify-center items-center">
            <p className="pl-6 text-3xl text-center font-extrabold font-mono pb-4 text-black">
                dIsCoVeR yOuR pErFeCt pRiCe!!!
            </p>
            <p className="font-lg"> Find the perfect fit for your budget and goals.</p>
            </div>
            <div className="flex flex-col w-full mb-[2rem] mt-5 bg-[#f9f9fa] rounded-xl">
                <div className="flex justify-center mt-6 py-3 bg-[#fff9f0] mx-4 rounded-xl"><p className="flex items-center font-bold" >Basic Plan</p></div>
                <div className="flex items-baseline justify-center mt-6 mb-3">
                    <p className="text-5xl">Rs.29<span className="text-sm">/month</span></p>
                </div>
                <div className="flex flex-col justify-center items-center m-4 border bg-[#fffffe] p-5 rounded-lg">
                    <p>Available Features</p>
                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg">
                        <MdOutlineCheckBox className="font-bold text-xl" />
                        <p className="px-7  "> Ad-free Experience</p>
                    </div>

                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg  ">
                        <MdOutlineCheckBox className="font-bold text-xl" />
                        <p className="px-7"> Advanced Analytics</p>
                    </div>

                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg ">
                        <MdOutlineCheckBox className="font-bold text-xl" />

                        <p className="px-3">Paid Contests discounts</p>
                    </div>

                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg ">
                        <CgCloseR className=" text-lg" />
                        <p className="px-7">Doctor Consultancy</p>
                    </div>

                    <div className="flex items-center my-4 py-1 pl-[3rem] pr-[3.2rem] border rounded-lg ">
                        <CgCloseR className=" text-lg" />
                        <p className="px-7">Nutrition Guidance</p>
                    </div>
                    <Link href=" https://buy.stripe.com/test_aEUeVZ9qJ2Ya1d6aEE">

                    <button className=" mt-3 w-[20rem] py-2 text-white bg-orange-400 rounded-xl">
                        Get Started
                    </button>

                    </Link>

                </div>
            </div>

            <div className="flex flex-col w-full my-[2rem] bg-[#f9f9fa] rounded-xl">
                <div className="flex justify-center mt-6 py-3 bg-[#fff9f0] mx-4 rounded-xl"><p className="flex items-center font-bold" >Pro Plan</p></div>
                <div className="flex items-baseline justify-center mt-6 mb-3">
                    <p className="text-5xl">Rs.59<span className="text-sm">/month</span></p>
                </div>
                <div className="flex flex-col justify-center items-center m-4 mt-1 border bg-[#fffffe] p-5 rounded-lg">
                    <p>Available Features</p>
                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg">
                        <MdOutlineCheckBox className="font-bold text-xl" />
                        <p className="px-7  "> Ad-free Experience</p>
                    </div>

                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg  ">
                        <MdOutlineCheckBox className="font-bold text-xl" />
                        <p className="px-7"> Advanced Analytics</p>
                    </div>

                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg ">
                        <MdOutlineCheckBox className="font-bold text-xl" />

                        <p className="px-3"> Paid Contests discounts</p>
                    </div>

                    <div className="flex items-center my-4 py-1 px-[3rem] border rounded-lg ">
                        <MdOutlineCheckBox className=" font-bold text-xl" />
                        <p className="px-7">Doctor Consultancy</p>
                    </div>

                    <div className="flex items-center my-4 py-1 pl-[3rem] pr-[3.2rem] border rounded-lg ">
                        <MdOutlineCheckBox className="font-bold text-xl" />
                        <p className="px-7">Nutrition Guidance</p>
                    </div>
                    
                    <Link href=" https://buy.stripe.com/test_4gw5lpbyRaqCf3WdQR">

                    <button className=" mt-3 w-[20rem] py-2 text-white bg-orange-400 rounded-xl">
                        Get Started
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page;
