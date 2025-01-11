import { useState } from "react";
import { Slider } from "../ui/slider";
import { useAppDispatch } from "@/app/store";
import { updateRow } from "@/features/employees/employeesSlice";
import { Employee } from "@/types";

type Props = {
  defaultValue: number;
  id: string;
  accessorKey: string;
};

const ColumnSlider = ({ defaultValue, id, accessorKey }: Props) => {
  const dispatch = useAppDispatch();
  const [salary, setSalary] = useState<number>(defaultValue);

  const handleValueChange = (newValue: number[]) => {
    const newSalary = newValue[0];
    if (newValue && newValue[0] !== salary) {
      setSalary(newValue[0]);
      dispatch(updateRow(id, accessorKey as keyof Employee, newSalary));
    }
  };

  return (
    <Slider
      key={id}
      value={[salary]}
      onValueChange={handleValueChange}
      max={100000}
      step={1}
      className="SliderThumb"
    />
  );
};
export default ColumnSlider;
