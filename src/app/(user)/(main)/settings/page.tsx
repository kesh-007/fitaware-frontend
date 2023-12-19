import React from "react";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import Alert from "./components/Alert";
import { IoChevronBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col overflow-y-scroll mb-8">
      <div className="flex items-center py-8 h-10 px-5 mt-5  ">
        <IoChevronBackOutline  className="text-xl text-black " />
        <p className="flex justify-center flex-1 font-bold pr-7 text-xl">
          Settings
        </p>
        {/* <MdOutlineDirectionsRun className="text-3xl hidden text-[#f64d41] "/> */}
      </div>
      <div className="flex bg-white rounded-3xl mt-5 mx-5">
        <input
          type="text"
          className=" rounded-3xl w-full border-[4px] border-white pl-3 py-2"
          placeholder="Search"
        ></input>
        <button className="pr-3 rounded-3xl border-white ">
          {/* <div></div> */}
          <FaSearch className="text-md pr-1 text-[#f64d41] " />
        </button>
      </div>
      <div className="flex flex-col justify-center my-7 mx-4 ">
        <Link href="/analytics">
          <div className="flex  items-center justify-between my-2 py-4 bg-[#fbebd8] rounded-2xl ">
            <div className="px-2 text-xl text-[#f64d41]">
              <GrAnalytics />
            </div>
            <p className="px-6 text-md ">Data & Analytics</p>
            <div className="mr-3 ">
              <MdNavigateNext />
            </div>
          </div>
        </Link>

        <Alert
          title={"Do you want to switch to a different theme?"}
          message={"Select Mode"}
          button1={"Light"}
          button2={"Dark"}
          className={"bg-black text-white"}
          component={
            <div className="flex  items-center cursor-pointer justify-between my-2 py-4 bg-[#fbebd8] rounded-2xl">
              <div className="px-2 text-xl text-[#f64d41]">
                <FaRegEye />
              </div>
              <p className="px-6 text-md ">Themes</p>
              <div className="mr-3">
                <MdNavigateNext />
              </div>
            </div>
          }
        />

        <div className="flex  items-center justify-between my-2 py-4 bg-[#fbebd8] rounded-2xl">
          <div className="px-2 text-xl text-[#f64d41]">
            <MdOutlinePayments />
          </div>
          <p className="px-6 text-md ">Payments & Subscription</p>
          <div className="mr-3">
            <MdNavigateNext />
          </div>
        </div>

        <div className="flex  items-center justify-between my-2 py-4 bg-[#fbebd8] rounded-2xl">
          <div className="px-2 text-xl text-[#f64d41]">
            <MdOutlinePrivacyTip />
          </div>
          <p className="px-6 text-md ">Privacy & Policy</p>
          <div className="mr-3">
            <MdNavigateNext />
          </div>
        </div>

        <div className="flex  items-center justify-between my-2 py-4 bg-[#fbebd8] rounded-2xl">
          <div className="px-2 text-xl text-[#f64d41]">
            <IoMdHelpCircleOutline />
          </div>
          <p className="px-6 text-md ">Help & Support</p>
          <div className="mr-3">
            <MdNavigateNext />
          </div>
        </div>

        <div className="flex  items-center justify-between my-2 py-4 bg-[#fbebd8] rounded-2xl">
          <div className="px-2 text-xl  text-black-700">
            <FcAbout />
          </div>
          <p className="px-6 text-md ">About Us</p>
          <div className="mr-3">
            <MdNavigateNext />
          </div>
        </div>

        <Alert
          title={"Are you sure you want to log out?"}
          message={`Click "Logout" to proceed with the logout or "Cancel" to stay logged in.`}
          button1={"cancel"}
          button2={"Logout"}
          className={"bg-[#f64d41]"}
          component={
            <div className="flex cursor-pointer items-center my-2 py-4 bg-[#fbebd8] rounded-2xl">
              <div className="px-2 text-xl text-[#f64d41]">
                <FiLogOut />
              </div>
              <p className="text-md flex flex-1 justify-center mr-7 text-[#f64d41]">
                Logout
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default page;
