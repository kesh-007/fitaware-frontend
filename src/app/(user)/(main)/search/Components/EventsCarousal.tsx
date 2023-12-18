
 "use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
 import { useEffect, useState } from "react";


function Card({image}:{image:string}){

    return (
        <div className="relative rounded-xl mb-10 shadow-lg">
            

                <img 
                    alt="Loading"
                    className="rounded-lg"
                    src={image} 
                />
        </div>
    )
}

export default function EventCarousal(){



    return (
        <Carousel 
            className="flex items-center justify-center gap-5 w-full md:px-10 max-md:px-5 rounded-lg " 
            infiniteLoop
            autoPlay
            showThumbs={false}
            showArrows={false}
            showStatus={false}
        >
            <img src={'https://c1.wallpaperflare.com/preview/459/48/965/man-guy-male-sunset.jpg'}  className="h-[300px] w-full"/>
           
            <img src={'https://c1.wallpaperflare.com/preview/275/839/743/man-sunset-standing-silhouette.jpg'} className="h-[300px] w-full"/>
            <img src={'https://c4.wallpaperflare.com/wallpaper/323/169/221/beach-alone-clouds-sea-water-hd-wallpaper-preview.jpg'} className="h-[300px] w-full"/>

            
        </Carousel>
    );
  };