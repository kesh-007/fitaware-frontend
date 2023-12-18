import Carosel from "./components/Curosel"
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";


export default function Home() {
  return (
    <div className="h-screen flex flex-1 flex-col overflow-y-scroll" >
      <div className="flex flex justify-center m-5">
          <div >
              <p className="text-m font-light text-red-500">Monday 26 May</p><p className="text-4xl font-bold mt-1">Blog</p>
          </div>
          <div className="flex items-center space-x-2 ml-auto">
              <img className="w-[3.5rem] h-auto rounded-full" src="https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png" alt="image description"></img>
          </div>
      </div>
      <div className=" ml-4 mr-4">
          <Carosel />
      </div>
      <div className="flex flex-col mt-6 mb-20">
        <div className="flex items-center">
          <p className="ml-4 text-2xl font-bold" >Popular</p>
          <p className="flex items-center space-x-2 ml-auto text-red-700 pr-5">Show all</p>
        </div>
        <div className="flex justify-between  mt-6 ">
            <img className="w-[4.5rem] h-[4.5rem] rounded-2xl ml-4  mt-2 " src="https://cdn.shopify.com/s/files/1/0355/4056/6149/files/unnamed_9_480x480.jpg?v=1677604516" alt="image description"></img>
            <div className="flex flex-1 flex-col ml-2">
                  <p className="text-red-300 text-xs font-medium ">NEW BLOG</p>
                  <p className="font-bold mt-1 w-[18rem]">12 Top Fitness Blogs You Need to Follow</p>
                <div className="flex items-center text-xs mt-1 ">
                    <FaRegClock />
                    <p className="ml-2 font-extralight">10 min ago</p>
                    <div className="ml-10 flex items-center font-extralight">
                        <AiOutlineLike className="mb-0.998"/>
                        <p className="ml-2 mt-0.5">300</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-6 ">
            <img className="w-[4.5rem] h-[4.5rem] rounded-2xl ml-4  mt-2 " src="https://www.anytimefitness.co.in/wp-content/uploads/2023/10/flat-lay-arrangement-with-seeds-frame-1024x683.jpg" alt="image description"></img>
            <div className="flex flex-1 flex-col ml-2">
                  <p className="text-red-300 text-xs font-medium ">NEW BLOG</p>
                  <p className="font-bold mt-1 w-[18rem]">How Much Protein are you Required to Eat per day for Muscle Building</p>
                <div className="flex items-center text-xs mt-1">
                    <FaRegClock />
                    <p className="font-extralight ml-2">1 hour ago</p>
                    <div className="ml-10 flex items-center font-extralight">
                        <AiOutlineLike className="mb-0.998"/>
                        <p className="ml-2 mt-0.5">900</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mt-6 ">
            <img className="w-[4.5rem] h-[4.5rem] rounded-2xl ml-4  mt-2 " src="https://www.anytimefitness.co.in/wp-content/uploads/2023/10/flat-lay-arrangement-with-seeds-frame-1024x683.jpg" alt="image description"></img>
            <div className="flex flex-1 flex-col ml-2">
                  <p className="text-red-300 text-xs font-medium ">NEW BLOG</p>
                  <p className="font-bold mt-1 w-[18rem]">How Much Protein are you Required to Eat per day for Muscle Building</p>
                <div className="flex items-center text-xs mt-1">
                    <FaRegClock />
                    <p className="font-extralight ml-2">1 hour ago</p>
                    <div className="ml-10 flex items-center font-extralight">
                        <AiOutlineLike className="mb-0.998"/>
                        <p className="ml-2 mt-0.5">900</p>
                    </div>
                </div>
            </div>
        </div><div className="flex justify-between items-center mt-6 ">
            <img className="w-[4.5rem] h-[4.5rem] rounded-2xl ml-4  mt-2 " src="https://www.anytimefitness.co.in/wp-content/uploads/2023/10/flat-lay-arrangement-with-seeds-frame-1024x683.jpg" alt="image description"></img>
            <div className="flex flex-1 flex-col ml-2">
                  <p className="text-red-300 text-xs font-medium ">NEW BLOG</p>
                  <p className="font-bold mt-1 w-[18rem]">How Much Protein are you Required to Eat per day for Muscle Building</p>
                <div className="flex items-center text-xs mt-1">
                    <FaRegClock />
                    <p className="font-extralight ml-2">1 hour ago</p>
                    <div className="ml-10 flex items-center font-extralight">
                        <AiOutlineLike className="mb-0.998"/>
                        <p className="ml-2 mt-0.5">900</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
      
  )
}
