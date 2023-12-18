// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "@/components/ui/button";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function SideMenu() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline" className="text-2xl">
          <FiMenu/>
        </Button>

      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-4xl">FitAdmin</SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Link href='alleve/events/login' className="m-2 w-full">
            <Label className="text-xl hover:bg-gray-200 p-5 w-full rounded-xl">Contest Schedule</Label>
          </Link>
          <Separator/>
          <Link href='alleve/events/login' className="m-2 w-full" >
            <Label className="text-xl hover:bg-gray-200 p-5 rounded-xl">Add Admin</Label>
          </Link>
          <Separator/>
          <Link href={'alleve/analytics'} className="m-2 w-full">
            <Label className="text-xl hover:bg-gray-200 p-5 rounded-xl">Analytics</Label>
          </Link>
          <Separator/>
          <Link href={'/'} className="m-2 w-full">
            <Label className="text-xl hover:bg-gray-200 p-5 rounded-xl">Logout</Label>
          </Link>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div> */}
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <SheetFooter>
          {/* <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
