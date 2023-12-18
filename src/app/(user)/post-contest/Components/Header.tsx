import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

export default function Header(){

    return (
        <div className="flex p-2 px-3 pt-5  justify-between">
            <p className="text-4xl">Fit Aware</p>
            <div className="flex items-center text-3xl gap-5">
                <IoIosSearch />
                <IoIosNotifications />
            </div>
        </div>
    );

}