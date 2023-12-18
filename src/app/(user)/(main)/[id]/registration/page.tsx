// import Image from "next/image";
"use client";
import { DATA } from "../data/dummy";
// import {useRouter} from "next/navigation";
import { FaFemale } from "react-icons/fa";
// import { FaMale } from "react-icons/fa";
import { BiMaleFemale } from "react-icons/bi";

export default function Registeration() {
  // const register = useRouter();

  const rules = [
    {
      id: 1,
      rule: "Prioritize safety by following proper form and guidelines during exercises.",
    },
    {
      id: 1,
      rule: "Respect fellow players, fostering a positive and supportive fitness community.",
    },
    {
      id: 1,
      rule: "Adhere to fair play principles and discourage cheating for a genuine gaming experience.",
    },
    {
      id: 1,
      rule: "Stay hydrated and be mindful of your physical limits while participating.",
    },
    {
      id: 1,
      rule: "Report any concerns about inappropriate content or behavior for a healthier gaming environment",
    },
  ];

  return (
    <div className="relative h-screen" style={{ zIndex: 200 }}>
      <div
        className="flex flex-col p-5 pb-20 justify-between gap-10 absolute top-0 bottom-0 left-0 rounded-2xl right-0"
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      >
        <div className="mt-[1rem] gap-10 flex flex-col">
          <p className="text-white text-4xl">Registration</p>
          <div className="gap-5 flex flex-col">
            {rules.map((value, index) => (
              <div className="text-gray-400 text-lg" key={index}>
                <p>* {value.rule}</p>
              </div>
            ))}
          </div>

          <div className="text-white text-6xl flex justify-evenly">
            <div className="p-5 border rounded-lg" onClick={() => console.log("clicked female icon")}>
              <FaFemale />
            </div>
            <div className="p-5 border rounded-lg" onClick={() => console.log("clicked female and male icon")}>
              <BiMaleFemale />
            </div>
          </div>
        </div>

        <div className="gap-5 flex flex-col">
          <div className="flex text-gray-500 gap-5">
            <input type="checkbox" />
            <p>
              App usage signifies acceptance of our terms and privacy policy for
              data handling.
            </p>
          </div>
          <div>
            <button className="bg-white rounded-xl p-3 text-black w-full">
              Register
            </button>
          </div>
        </div>
      </div>
      <img
        src={DATA[0].poster}
        alt="loading"
        className="object-cover h-screen w-full"
      />
    </div>
  );
}
