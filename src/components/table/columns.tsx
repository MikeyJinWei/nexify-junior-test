import { Employee, EMPLOYEE_KEYS } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import ColumnDatePicker from "./ColumnDatePicker";
import ColumnInput from "./ColumnInput";
import ColumnSlider from "./ColumnSlider";

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: EMPLOYEE_KEYS.NAME,
    header: EMPLOYEE_KEYS.NAME,
    cell: ({ row }) => (
      <ColumnInput
        id={row.original.id}
        defaultValue={row.original.Name}
        accessorKey={EMPLOYEE_KEYS.NAME}
      />
    ),
  },
  {
    accessorKey: EMPLOYEE_KEYS.DATE_OF_BIRTH,
    header: "Birthday",
    cell: ({ row }) => {
      return (
        <ColumnDatePicker
          id={row.original.id}
          DateOfBirth={row.original.DateOfBirth}
          accessorKey={EMPLOYEE_KEYS.DATE_OF_BIRTH}
        />
      );
    },
  },
  {
    accessorKey: EMPLOYEE_KEYS.SALARY,
    header: EMPLOYEE_KEYS.SALARY,
    cell: ({ row }) => (
      <ColumnSlider
        id={row.original.id}
        defaultValue={row.original.Salary}
        accessorKey={EMPLOYEE_KEYS.SALARY}
      />
    ),
  },
  {
    accessorKey: EMPLOYEE_KEYS.ADDRESS,
    header: EMPLOYEE_KEYS.ADDRESS,
    cell: ({ row }) => (
      <ColumnInput
        id={row.original.id}
        defaultValue={row.original.Address}
        accessorKey={EMPLOYEE_KEYS.ADDRESS}
      />
    ),
  },
];
