import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { format, parseISO, startOfDay } from "date-fns";
import { useAppDispatch } from "@/app/store";
import { updateRow } from "@/features/employees/employeesSlice";
import { Employee } from "@/types";
import { SelectSingleEventHandler } from "react-day-picker";

type Props = {
  DateOfBirth: string;
  id: string;
  accessorKey: keyof Employee;
};

const ColumnDatePicker = ({ DateOfBirth, id, accessorKey }: Props) => {
  const [date, setDate] = useState(startOfDay(parseISO(DateOfBirth)));

  const dispatch = useAppDispatch();
  const handleDateChange: SelectSingleEventHandler = (newDate) => {
    if (newDate && newDate !== date) {
      setDate(() => newDate);
      const validDate = format(newDate, "yyyy-MM-dd'T'00:00:00");
      dispatch(updateRow({ id, field: accessorKey, value: validDate }));
    }
  };

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
          {date ? format(date, "yyyy/MM/dd") : <span></span>}
          <CalendarIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};
export default ColumnDatePicker;
