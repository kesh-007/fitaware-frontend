"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { AdminTypeSelection } from "./AdminTypeSelection";
const page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    adminType: "",
  });

  const [suc, setSuc] = useState(false);

  const hassubmit = async (e) => {
    e.preventDefault();
    setSuc(true);
    setTimeout(() => {
      setSuc(false);
    }, 3000);
    console.log(data);
  };


  return (
    
      

      <div className="flex flex-col ml-60 w-[100%]">
         <h1 className="text-center text-4xl font-semibold mt-[5%]">Add Admin</h1>
        <div className=" flex border-2 border-gray-300 rounded  mt-10 ml-80 justify-center w-[50%]  ">
         
          <form className="flex flex-col p-5 w-[85%]">
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Name</label>
              <input
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="Admin name"
                type="text"
                onChange={(e) => {
                  setData({ ...data, name: e.target.value });
                }}
              ></input>
            </div>
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Email</label>
              <input
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="email"
                type="email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              ></input>
            </div>
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Password</label>
              <input
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              ></input>
            </div>
            <div className="m-3 mb-4 flex flex-col">
              <label className="mb-2 text-xl font-semibold">Admin Type</label>
              <select
                className="border-2 bg-gray-200 rounded-md p-2"
                placeholder="Admin Type"
                onChange={(e) => {
                  setData({ ...data, adminType: e.target.value });
                }}
              >
                <option>Super Admin</option>
                <option>Admin</option>
              </select>
            </div>
            {/* <div className="m-3 mb-4 flex flex-col">
                <label className="mb-2 text-xl font-semibold">Admin Type</label>
                <AdminTypeSelection/>
            </div> */}
            <div className="flex justify-center mt-3">
              <button
                onClick={hassubmit}
                className="bg-black rounded text-white p-2 m-3 w-full border-2 border-black hover:bg-white hover:text-black font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
   
  );
};

export default page;
