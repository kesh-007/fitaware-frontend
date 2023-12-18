import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5 py-6 text-black">
            <Link href={"/home"}>
                <MdOutlineArrowBackIos />
            </Link>
            <p className="font-bold">Workouts</p>
            {/* <HiDotsVertical /> */}
            <div className="text-transparent">g</div>
        </div>
    );

}