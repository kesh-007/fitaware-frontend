import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectInput from "@mui/material/Select/SelectInput";
import { useState } from "react";

export default function ProfileDialog({ children }) {
  const [Goals, setGoals] = useState(" ");
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Goals</DialogTitle>
          <DialogDescription>start chasing your goal</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center justify-center">
            <Label htmlFor="name" className="text-right">
              Enter goal
            </Label>
            <Input
              id="name"
              value={Goals}
              className="col-span-3 mt-2"
              onChange={(e) => setGoals(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
