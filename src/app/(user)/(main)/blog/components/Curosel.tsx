import * as React from "react"
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";


import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

export default function Carosel() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md ">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between ">
                  <div className=" text-white text-3xl p-6 flex justify-end ">
                  <FaRegBookmark />
                  </div>
                  <div className="backdrop-blur-sm m-2 text-justify rounded-[0.75rem] text-white font-extralight mb-9 pl-2 pr-5">
                    <p className="pt-3 font-poppins font-semibold">Fit to Play, Play to Fit</p>
                    <p className="font-poppins font-semibold">Merge Fun and Fitness</p>
                    <div className="mt-2 flex ">
                    <img className="w-[2rem] h-auto rounded-[30%]" src="https://www.vhv.rs/dpng/d/473-4739617_transparent-face-profile-png-round-profile-picture-png.png" alt="image description"></img>
                    <p className="ml-2 text-xs flex items-center ">Mathew Jones</p>   
                    <div className="flex flex-1 justify-end items-center text-xs">
                      <FaRegClock />
                      <p className="ml-2">10 min ago</p></div>                 
                    </div>
                    <div>

                    </div>
                  </div>
                </div>
                <img
                  src={artwork.art}
                  alt={`Photo by ${artwork.artist}`}
                  className="aspect-[3/4] object-cover rounded-[1rem]"
                  width={300}
                  height={300}
                />
              </div>
              
            </div>
            {/* <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption> */}
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
