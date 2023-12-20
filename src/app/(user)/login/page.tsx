import NavBar from '@/components/NavBar';
import LoginCard from '@/components/login/LoginCard';
import Slideshow from '@/components/login/SlideShow';
import Image from 'next/image';
import React from 'react';

const Page = () => {
  const images = [
    {
      id: "1",
      src: "/welcome.png",
      alt: "random image",
      name: "mask",
    },
    {
      id: "2",
      src: "/fitness1.png",
      alt: "random image",
      name: "mask",
    },
    {
      id: "3",
      src: "/fitness2.png",
      alt: "random image",
      name: "mask",
    },
    {
      id: "4",
      src: "/fitness3.png",
      alt: "random image",
      name: "mask",
    },
    {
      id: "5",
      src: "/fitness4.png",
      alt: "random image",
      name: "mask",
    },
   
  ];
  return (
    <div className='bg-white h-screen'>
      <Slideshow images={images} className='h-[65 vh]'/>
      <div>
  
      <LoginCard />

      </div>
      

    </div>
  );
};

export default Page;
