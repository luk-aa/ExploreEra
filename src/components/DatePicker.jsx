"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarDays as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePickerDemo({ date, setDate }) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            " w-full h-14 bg-white rounded-xl text-md border-2 border-primary justify-start text-left font-normal",
            !date && "text-muted-foreground "
          )}
        >
          <CalendarIcon className="mr-2 h-6 w-6 text-text opacity-70" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto bg-white  p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
