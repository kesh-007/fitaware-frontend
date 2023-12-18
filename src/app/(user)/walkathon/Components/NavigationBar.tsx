
"use client"

import { MdOutlineArrowBackIos } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import Link from "next/link";
import  Cookies  from 'universal-cookie';
import { useEffect, useId, useState } from "react";
import { PostUserDetail } from "@/api";
import { Button } from "@/components/ui/button";


export default function NavigationBar({name,style}:{name:string,style:string}){

    const cookies = new Cookies();
    const [name_,setName] = useState('');
    const [url,setUrl] = useState('');
    const [userid,Setuserid] = useState('');
    console.log(name,"Name of the test")
    const [stepcount,setStepcount] = useState(localStorage.getItem('stepCount')||0);
    const [token,SetToken] = useState({})
    const [record,toRecord] = useState(true)

    console.log(localStorage.getItem('stepCount'),"Step Count")
    useEffect(()=>{


    },[])
    useEffect(()=>{
        const token = cookies.get('token');
        SetToken(token);

   if (record)     {
    InsertData(token.profile.userID,token.profile.displayName,token.profile.profilePhotoUrl)
    toRecord(false)
}


      },[])


      async function InsertData (userid:any,displayName:any,url:any)
      {
        await PostUserDetail(userid, displayName, 20,"male", url,name ,stepcount)
      }


    
    

    return (
        <div>
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

