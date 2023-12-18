
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
// import { HiDotsVertical } from "react-icons/hi";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5 py-10 text-white absolute left-0 right-0 text-black">
            <Link href={"/profile"} className="bg-white p-2 rounded-xl text-black shadow-md">
                <MdOutlineArrowBackIos />
            </Link>
            <p className="text-black text-2xl">Treasure Hunt</p>
            {/* <HiDotsVertical /> */}
            <div className="w-[2rem]"/>
        </div>
    );

}