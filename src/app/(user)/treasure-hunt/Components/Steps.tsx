"use client";
// NEED FIX
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";


export default function Steps({progress , hints}:{progress:any, hints:any}){
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5;

  useEffect(() => {
    // Change the active slide every 3 seconds (adjust the interval as needed)
    // const interval = setInterval(() => {
    //   const nextSlide = (currentSlide + 1) % totalSlides;
    //   setCurrentSlide(nextSlide);
    // }, 5000);

    // Clear the interval when the component unmounts
    // return () => clearInterval(interval);
    if (progress === 100){
        setCurrentSlide((currentSlide + 1) % totalSlides)
    }
  }, [progress]);

    return (
        <Carousel 
            className="flex items-center justify-center w-full md:px-10 max-md:px-5 rounded-lg w-[100vh]" 
            autoPlay={false}
            swipeable={false}
            stopOnHover={false}
            showThumbs={false}
            selectedItem={currentSlide}
            showArrows={false}
            showStatus={false}
        >

            {/* {
                hints.map((value , index) => {  
                    <div className="bg-white h-[10rem] rounded-xl p-5">
                        <h1 className="text-2xl">hint 1</h1>
                        <p className="break-all">aksjbasdkjbaskdjbaksjdb</p>
                    </div>
                })
            } */}
            
            <div className="bg-white h-[10rem] rounded-xl p-5">
                <h1 className="text-2xl">hint 2</h1>
                <p className="break-all">this is the hint no 1.akjsadksjdakjsdaksjnakjsndaksjndakjsnkjnasdkjnharidh</p>
            </div>
            <div className="bg-white h-[10rem] rounded-xl p-5">
                <h1 className="text-2xl">hint 2</h1>
                <p className="break-all">this is the hint no 1.akjsadksjdakjsdaksjnakjsndaksjndakjsnkjnasdkjnharidh</p>
            </div>
            <div className="bg-white h-[10rem] rounded-xl p-5">
                <h1 className="text-2xl">hint 2</h1>
                <p className="break-all">this is the hint no 1.akjsadksjdakjsdaksjnakjsndaksjndakjsnkjnasdkjnharidh</p>
            </div>
            <div className="bg-white h-[10rem] rounded-xl p-5">
                <h1 className="text-2xl">hint 2</h1>
                <p className="break-all">this is the hint no 1.akjsadksjdakjsdaksjnakjsndaksjndakjsnkjnasdkjnharidh</p>
            </div>
            <div className="bg-white h-[10rem] rounded-xl p-5">
                <h1 className="text-2xl">hint 2</h1>
                <p className="break-all">this is the hint no 1.akjsadksjdakjsdaksjnakjsndaksjndakjsnkjnasdkjnharidh</p>
            </div>
        </Carousel>
    );
  };