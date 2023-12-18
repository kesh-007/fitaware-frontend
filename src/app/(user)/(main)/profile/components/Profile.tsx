"use client"
import React, { useEffect,useState } from 'react'
import  Cookies  from 'universal-cookie';

const Profile = () => {
    const cookies = new Cookies();
    const [profile,setProfile] = useState<any>({})
    useEffect(()=>{
        const token = cookies.get('token');
        setProfile(token.profile)
        console.log(token.profile,"let me see what is happening")

    },[])

  return (
    <div>
                <div className="h-[50vh] relative text-white">
            <div
                className="absolute inset-0 w-full h-full bg-cover"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNvbGlkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')",
                }}
            ></div>
            <div className="flex flex-col items-center justify-center h-full relative z-10">
                {profile && (
                    <>
                        <img src={profile.profilePhotoUrl} className="rounded-full w-[6rem] h-[6rem]" alt="profile" />
                        <p className="text-4xl font-bold mt-3">{profile.displayName}</p>
                    </>
                )}
            </div>
        </div>

    </div>
  )
}

export default Profile