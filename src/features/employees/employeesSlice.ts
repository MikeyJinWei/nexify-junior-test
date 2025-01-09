import { RootState } from "@/app/store";
import { Employee } from "@/types";
import { createAsyncThunk, createSlice, Store } from "@reduxjs/toolkit";
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

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecords.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRecords.fulfilled, (state, action) => {
        state.Success = action.payload.Success;
        state.Msg = action.payload.Msg;
        state.status = "succeeded";
        state.Data = action.payload.Data;
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
export const {} = employeesSlice.actions;
export default employeesSlice.reducer;
