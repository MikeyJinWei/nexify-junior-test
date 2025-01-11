import { useState } from "react";
import { Input } from "../ui/input";
import { Employee } from "@/types";
import { useAppDispatch } from "@/app/store";
import { updateRow } from "@/features/employees/employeesSlice";

type Props = {
  defaultValue: string;
  id: string;
  accessorKey: keyof Employee;
};

const ColumnInput = ({ defaultValue, id, accessorKey }: Props) => {
  const [value, setValue] = useState(defaultValue);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    setValue(newValue);
    dispatch(updateRow({ id, field: accessorKey, value: newValue }));
  };

  return (
    <Input type="text" key={id} value={value} onChange={handleInputChange} />
  );
};
export default ColumnInput;
