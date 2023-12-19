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

  

const Header = () => {
  const cookies = new Cookies();
  const [name,setName] = useState('')
  const[url,setUrl] = useState('') 
  const searchParams = useSearchParams()
 


  useEffect(() => {
    const storedAccessToken = cookies.get('accessToken');
    const storedRefreshToken = cookies.get('refreshToken');
    const displayName=cookies.get('displayName');
    const profileUrl=cookies.get('profilePhotoUrl');
    const userID = cookies.get('userID');
    const search:any = searchParams.get('data')
    const token_data = JSON.parse(search) 
    console.log(search,"ayooo emmmaa appppa");


    alert(`${search}`)
    console.log(JSON.parse(search),"IDu dan search dii gundu pooosini")

    const currentDate = new Date();
const expirationDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds
//cookies.set('accessToken', storedAccessToken, { path: '/', expires: expirationDate });
    if(!cookies.get('token') )
    {

    cookies.set("token",
    {
      accestoken:token_data.accestoken,
      refreshtoken:token_data.refreshdata,
      profile:{
        displayName:token_data.displayName,
        profilePhotoUrl:token_data.profileUrl,
        userID:token_data.userID
      }
    },{ path: '/', expires: expirationDate })

    }
  }, []);
  useEffect(()=>{
    const token = cookies.get('token');
    setName(token.profile.displayName)
    setUrl(token.profile.profilePhotoUrl)
  },[])

  return (
    <div className='p-3 mb-15 pt-3'>
        <div className='flex justify-between'>
            <div className='flex gap-3'>

            
     <div>
        <h1 className=' text-gray-500'>Hello {name}</h1>
        {/* <h1 className='text-sm font-bold'>Ready to play?</h1> */}

    </div>
     

    </div>

    <div className='bg-gray-200  rounded-full p-1 w-10 h-10 flex items-center justify-center'>
  <IoIosNotificationsOutline size={24} /> 
      <Avatar>
          <AvatarImage src={`${url}`} alt={`${name}`} />
          <AvatarFallback>{name}</AvatarFallback>
      </Avatar>
    </div>


    </div>
</div>
  )
}

export default Header