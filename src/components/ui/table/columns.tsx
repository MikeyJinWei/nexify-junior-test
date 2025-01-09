import { Employee } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "../input";
import ColumnDatePicker from "./ColumnDatePicker";
import ColumnInput from "./columnInput";
import ColumnSlider from "./ColumnSlider";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => <ColumnInput defaultValue={row.original.Name} />,
  },
  {
    accessorKey: "DateOfBirth",
    header: "Birthday",
    cell: ({ row }) => {
      return <ColumnDatePicker DateOfBirth={row.original.DateOfBirth} />;
    },
  },
  {
    accessorKey: "Salary",
    header: "Salary",
    cell: ({ row }) => <ColumnSlider defaultValue={row.original.Salary} />,
  },
  {
    accessorKey: "Address",
    header: "Address",
    cell: ({ row }) => (
      <Input type="text" defaultValue={row.original.Address} disabled={true} />
    ),
  },
];
