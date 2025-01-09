import { Employee } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "Name",
    header: "Name",
  },
  {
    accessorKey: "DateOfBirth",
    header: "Birthday",
  },
  {
    accessorKey: "Salary",
    header: "Salary",
  },
  {
    accessorKey: "Address",
    header: "Address",
  },
];
