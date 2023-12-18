"use client"
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectFields({ onChangeValue }:{onChangeValue:any}) {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (e:any) => {
    const newValue = e;
    setSelectedValue(newValue);
    onChangeValue(newValue); 
  };

  return (
    <Select onValueChange={(e)=>handleValueChange(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Filter</SelectLabel>
          <SelectItem value="graphs" >
            Graphs
          </SelectItem>
          <SelectItem value="testing_model" >
            Testing Model
          </SelectItem>
          <SelectItem value="data_table" >
            Data Table
          </SelectItem>
          <SelectItem value="help_support" >
            Help and Support
          </SelectItem>
          <SelectItem value="advertisers" >
            Advertisers
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
