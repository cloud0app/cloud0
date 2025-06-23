import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./button";
import { Calendar } from "./calendar";
import { FormControl, FormItem, FormLabel, FormMessage } from "./form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface DatePickerProps {
   date: Date | undefined;
   setDate: (date: Date | undefined) => void;
   label: string;
   placeholder?: string;
   className?: string;
}

export const DatePicker = ({ date, setDate, label, placeholder, className }: DatePickerProps) => {
   return (
      <FormItem className={className}>
         <FormLabel>{label}</FormLabel>
         <Popover>
            <PopoverTrigger asChild>
               <FormControl>
                  <Button
                     variant={"outline"}
                     className="w-full justify-start text-left font-normal"
                  >
                     <CalendarIcon className="mr-2 h-4 w-4" />
                     {date ? format(date, "PPP") : placeholder || "Pick a date"}
                  </Button>
               </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
               <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
         </Popover>
         <FormMessage />
      </FormItem>
   );
};
