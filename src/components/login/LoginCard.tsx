"use client"
import { Button } from "@/components/ui/button"
import  Cookies  from 'universal-cookie';
import { loginApi } from "@/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import toast,{Toaster} from 'react-hot-toast'
import { Input } from "@/components/ui/input"





export default function LoginCard() 
{
  const router = useRouter()
  const [email,setEmail] = useState('')
  const [password,Setpassword] = useState('')
  async function Login()
  {
    const data = await loginApi(email,password)
    console.log(data,'data na chumma ila da doi')
    if (data.email===email)
    {
      localStorage.setItem('email',data.email)

      window.location.href = '/home';

    }
    else
    {
      toast.error('Invalid email or password')
    }
  }
  return (
<Card className='h-[40vh]'>
  <CardHeader>
    <CardTitle className='text-center font-bold'>Login</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
    <Input onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
  </CardContent>
  <CardFooter>
  <Input onChange={(e)=>Setpassword(e.target.value)} placeholder="Password"/>

  </CardFooter>
  <div className='mt-5  mx-3'>
  <Button onClick={Login} className='w-full mr-3'>Login</Button>
  </div> 
</Card>

  )

}
