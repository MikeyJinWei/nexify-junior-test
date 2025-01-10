import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../calendar";
import { format } from "date-fns";

type Props = {
  DateOfBirth: string;
  id: string;
};

const ColumnDatePicker = ({ DateOfBirth, id }: Props) => {
  const [date, setDate] = useState<Date>();

  return (
    <Popover key={id}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-between text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          {DateOfBirth ? format(DateOfBirth, "PPP") : <span></span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
export default ColumnDatePicker;
