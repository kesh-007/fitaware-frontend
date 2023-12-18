
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export function EventCard(props:any) {
  return (
    <Card className="w-[240px]  h-[12rem] flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex justify-between">
          <div>
          {props.title} 
          </div>
          <div>
          {props.icon}
          </div>

          </CardTitle>
        <CardDescription>
          </CardDescription>
      </CardHeader>
      <CardContent>
        {props.childern}
      </CardContent>
    </Card>
  )
}
