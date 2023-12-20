"use client"
import { AddEnrollments, AlreadyEnrollments } from "@/api";
import {DATA} from "./data/dummy";
import  Cookies  from 'universal-cookie';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from 'react-hot-toast';

export default function Registeration({params}:{params:any}){
    const cookies = new Cookies();
    const token = cookies.get('token');
    const email = localStorage.getItem('email')||'';
    const router = useRouter();
    const [text,SetText]= useState('Register')
    const [isdisabled,SetisDisabled]= useState(false)

    useEffect(() => {
      alert(`${email}`)
        AlreadyEnrollments(email,params.id).then((res:any)=>{
          console.log(res,'idu necxt')
            const result = res.map((ress:any) => ress.gameid === params.id).includes(true);
            console.log(result,"aypop ebba")
            if (result)
            {
                SetText('Already Registered')
                SetisDisabled(true)

            }
        })
    }, [])

  async function handleRegister(){
        toast.success('Registered Successfully')
       // console.log("Registered Successfully",token.profile.userID);
        await AddEnrollments(email,params.id)
        router.push('/search')

        
    }

    const rules = [
    {
        id : 1,
        rule : "Prioritize safety by following proper form and guidelines during exercises."
    },
    {
        id : 2,
        rule : "Respect fellow players, fostering a positive and supportive fitness community."
    },
    {
        id : 3,
        rule : "Adhere to fair play principles and discourage cheating for a genuine gaming experience."
    },
    {
        id : 4,
        rule : "Stay hydrated and be mindful of your physical limits while participating."
    },
    {
        id : 5,
        rule : "Report any concerns about inappropriate content or behavior for a healthier gaming environment"
    },
]

    return (
        <div className="h-[110vh] ">
            
        <img
          src="https://images.unsplash.com/photo-1592903204858-e288251ad9cc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Fsa2luZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Image"
        />
  
        <div className="rounded-[2rem] h-[410px] bg-gray-100 absolute bottom-0 left-0 right-0 z-10">
            <h1 className="text-center p-2 text-xl font-bold">Rules to be followed</h1>

          {rules.map((rule) => (
            <div key={rule.id} className="flex space-y-2  p-2 items-center justify-start space-x-2">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <p className="text-sm font-semibold text-gray-700">{rule.rule}</p>
            </div>
          ))}

<div className="flex justify-center mt-3">

          <Button  onClick = {handleRegister} className="w-[90%] ">{text}</Button>
          </div>
         
        </div>
      </div>


        );
}