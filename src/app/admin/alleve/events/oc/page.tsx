'use client';
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link'
import { AdminContestForm } from './AdminContestForm';


function Page() {
  

  const [indat,setIndat]=useState({
    ct:'',
    conName:'',
    organizer:'',
    sdate:'',
    edate:'',
    st:'',
    et:'',
    dec:'',
    price:'',
  }) 
  const [suc,setSuc]=useState(false)


  const hassubmit = async (e) => {
    e.preventDefault(); 
    const res= await axios.post('/api',indat)
  if(res.status==200){
    setSuc(true)
    
    setTimeout(()=>{setSuc(false); },3000)
    
    
  }
  };
  
  return <>
  <div className='mt-5'>
    <Link className='bg-black text-white p-3 m-5  rounded-md '  href="/alleve">Back</Link>
    <div className='flex justify-center'>{suc?<h1 className='text-center bg-green-500 p-3 text-2xl font-semibold rounded fixed top-0   sm:w-1/3 w-1/2 '>Submitted</h1>:<h1></h1>}</div>
    </div>
    <div className='ml-[30%] mt-10'>
    
  <div className=' mt-5 rounded '>
    <AdminContestForm/> 
  </div>
  </div>

  </>
}


export default Page