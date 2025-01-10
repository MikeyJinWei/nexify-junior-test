import { Employee } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import ColumnDatePicker from "./ColumnDatePicker";
import ColumnInput from "./ColumnInput";
import ColumnSlider from "./ColumnSlider";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "Name",
    header: "Name",
    cell: ({ row }) => (
      <ColumnInput id={row.id} defaultValue={row.original.Name} />
    ),
  },
  {
    accessorKey: "DateOfBirth",
    header: "Birthday",
    cell: ({ row }) => {
      return (
        <ColumnDatePicker id={row.id} DateOfBirth={row.original.DateOfBirth} />
      );
    },
  },
  {
    accessorKey: "Salary",
    header: "Salary",
    cell: ({ row }) => (
      <ColumnSlider id={row.id} defaultValue={row.original.Salary} />
    ),
  },
  {
    accessorKey: "Address",
    header: "Address",
    cell: ({ row }) => (
      <ColumnInput id={row.id} defaultValue={row.original.Address} />
    ),
  },
];
