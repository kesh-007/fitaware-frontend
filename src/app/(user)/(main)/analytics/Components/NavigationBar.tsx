import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";

export default function NavigationBar(){

    return (
        <div className="flex justify-between p-5  text-black">
            <MdOutlineArrowBackIos />
            <p className="font-bold">Progress</p>
            <HiDotsVertical />
        </div>
    );

}