import { IoChevronBackOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export default function Home() {
    return (
      <div className="w-full h-screen flex flex-1 flex-col overflow-y-scroll">
        <div className="flex flex-col relative " >
          <div className="absolute top-0 left-0 right-0 bottom-0 ">
            <div className="flex justify-between items-center ml-5 text-white  mt-10">
              <div className="text-3xl">
                <IoChevronBackOutline />
              </div>
              <div className="mr-10 text-3xl">
                <FaRegBookmark />
              </div>
            </div>
            <div className="flex flex-col justify-between mt-[9rem] text-white ml-5">
              <p className="text-2xl w-[15rem] font-poppins font-semibold">Fit to Play, Play to Fit: Merge Fun and Fitness.</p>
              <p className="w-[20rem] font-light mt-3">These fun fitness games and activities will spice up your routine and get you out of your exercising rut. Have fun while exercising with these games!</p>
              <div className="flex mt-5 ">
                <img className="w-[2rem] h-auto rounded-[30%]" src="https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png" alt="image description"></img>
                <p className="ml-3 text-sm font-extralight flex items-center ">Mathew Jones</p>   
              </div>
              <div className="flex items-center text-xs font-extralight mt-5">
                  <FaRegClock />
                  <p className="ml-2">10 min ago</p>
                  <AiOutlineLike className="mb-0.998 ml-7 text-[15px]"/>
                  <p className="ml-2 mt-0.5">200</p>
              </div>   
            </div>
          </div>
            <img src="https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80" alt="Loading" className="w-full rounded-b-[3rem]"></img>
        </div>
        <div className="mb-20 flex flex-col">
          <div className="ml-5 mt-7 flex items-center">
              <img className="w-[3.5rem] h-auto rounded-full" src="https://pxbar.com/wp-content/uploads/2023/08/real-girl-profile-pic.jpg" alt="image description"></img>
              <div className="flex flex-col ml-3 w-[13rem]">
                  <p className="font-semibold"> Wow,its unbelievable</p>
                  <p className="font-extralight text-xs mt-1.5">Sarah Jane</p>
              </div>
              <FaHeart  className="text-red-400 text-xl ml-[2rem]"/>
          </div>
          <div className="ml-5 mt-7 flex items-center">
            <img className="w-[3.5rem] h-auto rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4LAqlO0MWJt_12uP6ZCMTv5zqEpWtY9aSw&usqp=CAU" alt="image description"></img>
            <div className="flex flex-col ml-3 w-[13rem]">
              <p className="font-semibold"> Awesome tips </p>
              <p className="font-extralight text-xs mt-1.5 ">Amelia Paige</p>
            </div>
            <CiHeart  className="text-black font-light text-2xl ml-[2rem]"/>
          </div>
          <div className="ml-5 mt-7 flex items-center">
            <img className="w-[3.5rem] h-auto rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&usqp=CAU" alt="image description"></img>
            <div className="flex flex-col ml-3 w-[13rem]">
            <p className="font-semibold"> Oh, man! That was really helpful!!</p>
            <p className="font-extralight text-xs mt-1.5">Benjamin Gray</p>
            </div>
            <CiHeart  className="text-black font-light text-2xl ml-[2rem]"/>
          </div>
        </div>  

      </div>
      
    )
}