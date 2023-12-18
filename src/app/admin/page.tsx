"use client";
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import {useRouter} from 'next/navigation'
import toast ,{Toaster} from 'react-hot-toast'




export default function CardWithForm() {

  const navigate = useRouter();
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [suc,setSuc]=useState(false)
  
  
  function cl(){
    if(email==='fitaware@gmail.com' && password==='1234'){
      
      toast.success("Login successful")
      navigate.push('/admin/alleve')

    }
    else{
          toast.error("Invalid Credentials")
          setTimeout(()=>{
            setSuc(false)
          },3000);
    }
  }
  return (
    <>
    <Toaster/>
    <div className="flex justify-center items-center h-screen ">
      <Card className="w-[350px]  ">
        <CardHeader className="flex">
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="gap-10 flex flex-col">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3 text-lg">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="example@gmail.com" type="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-3 text-lg">
                <Label htmlFor="name">Password</Label>
                <Input id="name" onChange={(e) => setPassword(e.target.value)} type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex w-full">
          <Button className="w-full" onClick={cl}>Login</Button>
        </CardFooter>
      </Card>
    </div></>
    
  )
}
