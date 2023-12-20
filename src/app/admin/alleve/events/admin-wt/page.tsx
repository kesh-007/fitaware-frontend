"use client"
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ScheduleWalkathonApi } from '@/api';
import toast ,{Toaster} from 'react-hot-toast';

const Page = () => {
  const [formData, setFormData] = useState({
    name:"",
    prize_1:0,
    prize_2:0,
    prize_3:0,
    rules:"",
    base_fare:0,
    start_date:new Date(),
    end_date:new Date()
});

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTimestampChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ScheduleWalkathon = async() => {
    ScheduleWalkathonApi(formData).then((res:any) => {
      console.log(res,"res ena ")
      toast.success("Scheduled Walkathon Successfully")

    })

  }


  return (
    <div className="border border-gray-200 p-4 rounded-md">
      <Toaster/>
      <div className="flex gap-5">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-[300px]"
          />
        </div>
        <div>
          <Label htmlFor="base_fare">Base Fare</Label>
          <Input
            id="base_fare"
            type="number"
            name="base_fare"
            value={formData.base_fare}
            onChange={handleInputChange}
            className="w-[300px]"
          />
        </div>
      </div>
      <div>
          <Label htmlFor="rules">Rules</Label>
          <Input
            id="rules"
            type="text"
            name="rules"
            value={formData.rules}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>

        <div className='flex gap-3 mt-2'>
        <div>
          <Label htmlFor="prize_1">Prize 1</Label>
          <Input
            id="prize_1"
            type="number"
            name="prize_1"
            value={formData.prize_1}
            onChange={handleInputChange}
            className="w-[300px]"
          />
        </div>
        <div>
          <Label htmlFor="prize_2">Prize 2</Label>
          <Input
            id="prize_2"
            type="number"
            name="prize_2"
            value={formData.prize_2}
            onChange={handleInputChange}
            className="w-[300px]"
          />
        </div>
        <div>
          <Label htmlFor="prize_3">Prize 3</Label>
          <Input
            id="prize_3"
            type="number"
            name="prize_3"
            value={formData.prize_3}
            onChange={handleInputChange}
            className="w-[300px]"
          />
        </div>


        

        </div>
        <div className='flex justify-between  mt-3'>
          <div>
        <Label htmlFor="start_date">Start Date</Label>
        <Input
          type="datetime-local"
          id="start_date"
          name="start_date"
          onChange={handleTimestampChange}
        />
        </div>
<div>
     
        <Label htmlFor="end_date">End Date</Label>
        <Input
          type="datetime-local"
          id="end_date"
          name="end_date"
          onChange={handleTimestampChange}
        />
        </div>
        </div>
        <div className='mt-[3rem]'>
        <Button onClick={ScheduleWalkathon}>Schedule</Button>
        </div>
      


    </div>
  );
};

export default Page;
