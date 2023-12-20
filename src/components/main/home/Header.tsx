"use client"
import React, { useEffect, useState } from 'react'
import  Cookies  from 'universal-cookie';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { IoIosNotificationsOutline } from 'react-icons/io';
  // import { IoIosNotificationsOutline } from "react-icons/io";
  import { useSearchParams } from 'next/navigation'
import { GetWalkSteps } from '@/api';
import { MdAccountCircle } from "react-icons/md";


  

const Header = () => {
  const [email,setEmail] = useState('')
  const [stepcounts,stepcountsSet] = useState(0)
  

  const [results,setResults] = useState('')
  useEffect(() => {

    setEmail(localStorage.getItem('email')||'')
    getUserData()

    const interval = setInterval(() => {
      getUserData()

  }, 1500);

  return () => {
      clearInterval(interval); 
  };

    



  }, []);

  async function getUserData(){
    const result = await GetWalkSteps(await localStorage.getItem('email')||'')
    console.log(result.stepcounts,'result')
    setResults(result)
    localStorage.setItem('stepcounts',result.stepcounts)
    stepcountsSet(result.stepcounts)



  }



  

  return (
    <div className='p-3 mb-15 pt-3'>
        <div className='flex justify-between'>
            <div className='flex gap-3'>

            
     <div>
        <h1 className=' text-gray-500'>Hello {email}</h1>
        {/* <h1 className='text-sm font-bold'>Ready to play?</h1> */}

    </div>
     

    </div>


  <MdAccountCircle size={27}/>



    </div>
</div>
  )
}

export default Header