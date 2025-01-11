import { RootState } from "@/app/store";
import { Employee } from "@/types";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export type EmployeesState = {
  Success: boolean;
  Msg: null | string;
  status: "idle" | "loading" | "succeeded" | "failed";
  Data: Employee[];
};

const initialState: EmployeesState = {
  Success: false,
  Msg: null,
  status: "idle",
  Data: [],
};

export const getRecords = createAsyncThunk("employees/getRecords", async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/Record/GetRecords`
    );
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    throw new Error(JSON.stringify({ Success: false, Msg: err.message }));
  }
});

// export const saveRecord = createAsyncThunk(
//   "employees/saveRecord",
//   async (newRecord: Employee, { getState }) => {
//     console.log("saveRecord");
//   }
// );

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addRow: {
      reducer: (state, action: PayloadAction<Employee>) => {
        state.Data.unshift(action.payload);
      },
      prepare: () => {
        return {
          payload: {
            Name: "",
            DateOfBirth: new Date().toISOString(),
            Salary: 0,
            Address: "",
            id: nanoid(),
          },
        };
      },
    },
    updateRow: {
      reducer: <Key extends keyof Employee>(
        state: EmployeesState,
        action: PayloadAction<{
          id: string;
          field: keyof Employee;
          value: Employee[Key];
        }>
      ) => {
        const { id, field, value } = action.payload;
        const employee = state.Data.find((employee) => employee.id === id);
        if (employee) {
          (employee[field] as Employee[Key]) = value;
        }
      },
      prepare: <Key extends keyof Employee>(
        id: string,
        field: Key,
        value: Employee[Key]
      ) => ({
        payload: { id, field, value },
      }),
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.Success = action.payload.Success;
        state.Msg = action.payload.Msg;
        state.status = "succeeded";
        // state.Data = action.payload.Data;
        state.Data = action.payload.Data.map((employee: Employee) => ({
          ...employee,
          id: nanoid(),
        }));
      })
      .addCase(getRecords.rejected, (state, action) => {
        try {
          const errorData = JSON.parse(action.error.message!);
          state.Success = errorData.Success;
          state.Msg = errorData.Msg;
        } catch (parseError) {
          state.Msg = "Failed to fetch data";
        } finally {
          state.Success = false;
          state.status = "failed";
          state.Data = [];
        }
      });
  },
});

export const getAllEmployeesData = (state: RootState) => state.employees.Data;
export const fetchEmployeesStatus = (state: RootState) =>
  state.employees.status;
export const { addRow, updateRow } = employeesSlice.actions;
export default employeesSlice.reducer;
