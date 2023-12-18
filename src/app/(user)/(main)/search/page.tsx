import React from 'react'
import Events from './Components/Events'
import NavigationBar from './Components/NavigationBar';
import { ScrollArea } from "@/components/ui/scroll-area"; 
import OtherEvent from './Components/OtherEvents';


const page = () => {
  return (
    <div className='pb-20 h-screen overflow-y-scroll'>
      <NavigationBar/>
      <div className='px-5'>
        <div className='py-2'>
          <input 
              className='p-3 w-full rounded-lg px-4 outline-none'
              type='search' 
              placeholder='Search event' 
              maxLength={15}
            />
        </div>
      </div>
      <div>
          <Events title={""}/>
      </div>
      <div className='overflow-x-hidden w-full'>
            <OtherEvent name={"Walkathon"} />
      </div>
    </div>
  )
}

export default page