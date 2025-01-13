export type Employee = {
  id: string;
  Name: string;
  DateOfBirth: string;
  Salary: number;
  Address: string;
};

export type EmployeesToSave = {
  Name: string;
  DateOfBirth: string;
  Salary: number;
  Address: string;
};

export enum EMPLOYEE_KEYS {
  NAME = "Name",
  DATE_OF_BIRTH = "DateOfBirth",
  SALARY = "Salary",
  ADDRESS = "Address",
}

export type EmployeesState = {
  Success: boolean;
  Msg: null | string;
  status: "idle" | "loading" | "succeeded" | "failed";
  Data: Employee[];
};

export interface EmployeesApiResponse {
  Success: boolean;
  Msg: string | null;
  Data?: Employee[];
}
