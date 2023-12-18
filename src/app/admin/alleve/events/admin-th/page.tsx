"use client";
import React from "react";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

function Page() {
  const [name, setname] = useState("");
  const [organizer, setorganizer] = useState("");
  const [date, setdate] = useState("");
  const [st, setst] = useState("");
  const [et, setet] = useState("");
  const [loc1, setloc1] = useState("");
  const [loc2, setloc2] = useState("");
  const [loc3, setloc3] = useState("");
  const [loc4, setloc4] = useState("");
  const [dec, setdec] = useState("");
  const [prc, setprc] = useState("");
  const [suc, setSuc] = useState(false);

  const hassubmit = async (e) => {
    e.preventDefault();
    const dat = {
      ct: "TreasureHunt",
      name,
      organizer,
      date,
      st,
      et,
      prc,
      loc1,
      loc2,
      loc3,
      loc4,
      dec,
    };
    const res = await axios.post("/api", dat);
    if (res.status == 200) {
      setSuc(true);

      setTimeout(() => {
        setSuc(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        {suc ? (
          <h1 className="text-center bg-green-500 p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 ">
            Submitted
          </h1>
        ) : (
          <h1></h1>
        )}
      </div>
      <div className="flex gap-2 ">
        {/* <div className="border-2 border-gray-300 flex-2 p-5 rounded m-5 md:mt-10 mt-5  flex flex-col items-center h-[90%] fixed">
          <h1 className="text-2xl font-bold mt-5 border-b-2 pb-4">Fitadmin</h1>
          <ol className="mt-10">
            <li className="text-lg font-medium md:mt-6  mt-4 text-center  bg-black p-2 text-white rounded">
              <Link href="/alleve/">Contest Schedule</Link>
            </li>
            <li className="text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded">
              <Link href="/alleve/events/login">Add Admin</Link>
            </li>
            <li className="text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded">
              <Link href="/alleve/analytics">Analytics</Link>
            </li>
            <li className="text-lg font-medium md:mt-6  mt-4 text-center text-gray-600 hover:bg-black p-2 hover:text-white rounded">
              <Link href="/alleve/events/adminlog">LogOut</Link>
            </li>
          </ol>

          <h1 className="text-lg font-bold mt-40 ">Admin</h1>
          <h1 className="text-md  mb-5">Admin Name</h1>
        </div> */}

        <div className="ml-96 flex flex-col items-center ">
          <h1 className="text-center font-bold text-4xl mt-10 ">
            Add TreasureHunt Contest
          </h1>

          <div className=" md:p-10 p-5 lg:ml-40 lg:mr-40  md:m-10 border-2 border-gray-200 rounded-md w-[100%]">
            <form className="flex flex-col gap-2 ">
              <div className="flex flex-col gap-3 justify-center sm:flex-row ">
                <div className="flex flex-col sm:w-1/2 ">
                  <label
                    className="text-xl font-semibold mt-2 mb-2"
                    htmlFor="name"
                  >
                    TreasureHunt Name
                  </label>
                  <input
                    className="p-2 rounded-md  border-2 bg-gray-200"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Contestname"
                    onChange={(e) => {
                      setname(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex flex-col sm:w-1/2  ">
                  <label
                    className="text-xl font-semibold mt-2 mb-2"
                    htmlFor="organizer"
                  >
                    Organizer
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="text"
                    placeholder="Organizer"
                    id="organizer"
                    name="organizer"
                    onChange={(e) => {
                      setorganizer(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <label className="text-xl font-semibold mt-4 " htmlFor="date">
                Date
              </label>
              <input
                className="p-2 rounded-md bg-gray-200"
                type="date"
                placeholder="Date"
                id="date"
                name="date"
                onChange={(e) => {
                  setdate(e.target.value);
                }}
              ></input>

              <div className="flex flex-col gap-3 justify-center sm:flex-row ">
                <div className="flex flex-col sm:w-1/2 ">
                  <label className="text-xl font-semibold mt-4 mb-2">
                    {" "}
                    StartTime
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="time"
                    name="st"
                    placeholder="Start Time"
                    onChange={(e) => {
                      setst(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col sm:w-1/2 ">
                  <label className="text-xl font-semibold mt-4 mb-2">
                    {" "}
                    EndTime
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="time"
                    name="et"
                    placeholder="End Time"
                    onChange={(e) => {
                      setet(e.target.value);
                    }}
                  />
                </div>
              </div>

              <label className="text-xl font-semibold mt-4">Price</label>
              <input
                className="p-2 rounded-md bg-gray-200"
                type="number"
                name="price"
                onChange={(e) => {
                  setprc(e.target.value);
                }}
              ></input>

              <div className="flex flex-col gap-3 justify-center sm:flex-row mt-2 ">
                <div className="flex flex-col sm:w-1/2 ">
                  <label className="text-xl font-semibold mt-2 mb-2">
                    Location 1
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => {
                      setloc1(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex flex-col sm:w-1/2 ">
                  <label className="text-xl font-semibold mt-2 mb-2">
                    Location 2
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => {
                      setloc2(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <div className="flex flex-col gap-3 justify-center sm:flex-row ">
                <div className="flex flex-col sm:w-1/2 ">
                  <label className="text-xl font-semibold mt-2 mb-2">
                    Location 3
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => {
                      setloc3(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="flex flex-col sm:w-1/2 ">
                  <label className="text-xl font-semibold mt-2 mb-2">
                    Location 4
                  </label>
                  <input
                    className="p-2 rounded-md bg-gray-200"
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={(e) => {
                      setloc4(e.target.value);
                    }}
                  ></input>
                </div>
              </div>

              <label className="text-xl font-semibold mt-4 ">Description</label>
              <textarea
                className="p-2 rounded-md bg-gray-200"
                cols={6}
                rows={10}
                name="dec"
                placeholder="Decription"
                onChange={(e) => {
                  setdec(e.target.value);
                }}
              ></textarea>
              <div className="flex justify-center mt-7 ">
                <button
                  onClick={hassubmit}
                  className="bg-black rounded w-40 text-white p-3   border-2 border-black hover:bg-white hover:text-black font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
