"use client"
import { Button } from "@/components/ui/button"
import  Cookies  from 'universal-cookie';
import { loginApi } from "@/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";



export default function LoginCard() {
  const router = useRouter()
  
  const cookie = new Cookies();
  useEffect(()=>{
    if (cookie.get('token') )
    {
      
      router.push('/home')
    }
    
  },[])
  async function Login()
  {
    const data = await loginApi();
    console.log(data.authUrl)
    window.location.href=data.authUrl
  }
  return (
    <div className="mx-2">
      <p className="text-[0.7rem]  text-gray-600">
      Empowering Fitness Through Fun: Where Games Drive Your Health Journey!

      </p>
      <Button onClick={Login} className="bg-[#F64D41] mt-1 text-white p-5 w-full">
        <h1>Get Started</h1>
      </Button>
    </div>
  )

}
