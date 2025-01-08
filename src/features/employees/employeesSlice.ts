import { Employee } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// const initialState: CounterState = {
//   value: 0,
// };

export type EmployeesState = {
  employees: Employee[];
  success: false;
  msg: null | string;
};

const initialState: EmployeesState = {
  employees: [],
  success: false,
  msg: null,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = employeesSlice.actions;

export default employeesSlice.reducer;
