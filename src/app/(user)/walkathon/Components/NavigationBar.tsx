"use client"
import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";
import  Cookies  from 'universal-cookie';
import { useEffect, useId, useState } from "react";
import { PostUserDetail, SuperMassPosition } from "@/api";
import { Button } from "@/components/ui/button";
import toast,{Toaster} from "react-hot-toast";

export default function NavigationBar({name,style}:{name:string,style:string}){

    const cookies = new Cookies();
    const [name_,setName] = useState('');
    const [url,setUrl] = useState('');
    const [userid,Setuserid] = useState('');
    console.log(name,"Name of the test")
    const stri = localStorage.getItem('stepcounts') || ''
    const value = parseInt(stri, 10);
    const [stepcount, setStepcount] = useState(0);
    const [token,SetToken] = useState({})
    const [record,toRecord] = useState(true)
    const email = localStorage.getItem('email')||'';



    console.log(localStorage.getItem('stepcounts'),"Step Count")
    useEffect(()=>{
         SuperMassPosition(email).then((data)=>{            
            console.log("Position",data)
            toast.success(`${data.position} is your new place 🚀`)
         })


    },[])
    useEffect(()=>{
        const token = cookies.get('token');
        SetToken(token);

   if (record)     {
    InsertData(email,'','')
    toRecord(false)
}


      },[])


      async function InsertData (userid:any,displayName:any,url:any)
      {
        await PostUserDetail(userid, displayName, 20,"male", 'url',name ,stepcount)
      }


    
    

    return (
        <div>
            <Toaster/>
        <div className="flex justify-between p-5 font-bold text-black">
            <Link href={'/search'}>

                <MdOutlineArrowBackIos />
                </Link>
            <p className="text-2xl">Walkathon</p>
            <HiDotsVertical />


        </div>

        </div>
    );

}

