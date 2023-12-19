"use client";
import * as React from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AdminContestForm() {
  const [indat, setIndat] = React.useState({
    ct: "",
    conName: "",
    organizer: "",
    sdate: "",
    edate: "",
    st: "",
    et: "",
    dec: "",
    price: "",
  });

  const [suc, setSuc] = React.useState(false);

  const hassubmit = async (e:any) => {
  };

  return (
    <Card className="w-[250%] overflow-scroll">
      <CardHeader>
        <CardTitle className="text-center">Create Context</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Contest Type</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Yoga</SelectItem>
                  <SelectItem value="sveltekit">Another</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Contest Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, conName: e.target.value });
                }}
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Organizer</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, organizer: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">StartDate</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, sdate: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">EndDate</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, edate: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">StartTime</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, st: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">EndTime</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, et: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Price</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                onChange={(e) => {
                  setIndat({ ...indat, price: e.target.value });
                }}
              />
            </div>

            <label className=" text-lg font-semibold mt-2">Description</label>
            <textarea
              name="dec"
              rows={10}
              className="bg-gray-100"
              onChange={(e) => {
                setIndat({ ...indat, dec: e.target.value });
              }}
            ></textarea>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center ">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button className='p-2 w-40' onClick={hassubmit}>Submit</Button>
      </CardFooter>
    </Card>
  );
}
