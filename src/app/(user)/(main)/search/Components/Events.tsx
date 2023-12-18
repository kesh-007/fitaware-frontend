"use client";
// import { Carousel } from "react-responsive-carousel";
import EventCarousal from "./EventsCarousal";

export default function Events({title}:{title:string}){

    return (
        <div className="">
            <div className="p-5 text-xl">
            </div>
            <EventCarousal/>
        </div>
    );

}