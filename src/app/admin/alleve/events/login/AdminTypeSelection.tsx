import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AdminTypeSelection() {

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Type"/>
      </SelectTrigger>
      <SelectContent className="w-full">
          <SelectItem value="msk">Super Admin</SelectItem>
          <SelectItem value="ist">Admin</SelectItem>
      </SelectContent>
    </Select>
  )
}
