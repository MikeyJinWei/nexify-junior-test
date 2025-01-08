import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  name: string;
  dateOfBirth: string;
  salary: number;
  address: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Birthday",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];
