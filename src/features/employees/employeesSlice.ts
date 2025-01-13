import { getRecords, saveRecords } from "@/api/Record/record";
import { RootState } from "@/app/store";
import { parseErrorMessage } from "@/lib/utils";
import { Employee, EmployeesApiResponse, EmployeesState } from "@/types";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { format } from "date-fns";

const initialState: EmployeesState = {
  Success: false,
  Msg: null,
  status: "idle",
  Data: [],
};

export const getRecordsThunk = createAsyncThunk<EmployeesApiResponse>(
  "employees/getRecords",
  async () => {
    try {
      const { data } = await getRecords();
      return data;
    } catch (err: any) {
      throw new Error(
        JSON.stringify({ Success: false, Msg: err.message as unknown })
      );
    }
  }
);

export const saveRecordsThunk = createAsyncThunk<
  EmployeesApiResponse,
  Employee[]
>("employees/saveRecord", async (employees: Employee[]) => {
  try {
    const employeesToSave = employees.map(({ id, ...rest }) => rest);
    const { data } = await saveRecords(employeesToSave);
    return data;
  } catch (err: any) {
    throw new Error(
      JSON.stringify({ Success: false, Msg: err.message as unknown })
    );
  }
});

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addRow: {
      reducer: (state, action: PayloadAction<Employee>) => {
        state.Data.unshift(action.payload);
      },
      prepare: () => {
        const date = new Date();
        const validDate = format(date, "yyyy-MM-dd'T'00:00:00");
        return {
          payload: {
            Name: "",
            DateOfBirth: validDate,
            Salary: 0,
            Address: "",
            id: nanoid(),
          },
        };
      },
    },
    updateRow: (
      state: EmployeesState,
      action: PayloadAction<{
        id: string;
        field: keyof Employee;
        value: Employee[keyof Employee];
      }>
    ) => {
      const { id, field, value } = action.payload;
      const employee = state.Data.find((employee) => employee.id === id);
      if (employee) {
        (employee[field] as Employee[keyof Employee]) = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // getRecordsThunk
      .addCase(getRecordsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRecordsThunk.fulfilled, (state, action) => {
        state.Success = action.payload.Success;
        state.Msg = action.payload.Msg;
        state.status = "succeeded";
        state.Data =
          action.payload.Data?.map((employee: Employee) => ({
            ...employee,
            id: nanoid(),
          })) || [];
      })
      .addCase(getRecordsThunk.rejected, (state, action) => {
        const errorData = parseErrorMessage(action.error.message);
        state.Success = errorData.Success;
        state.Msg = errorData.Msg;
        state.status = "failed";
        state.Data = [];
      })
      // saveRecordsThunk
      .addCase(saveRecordsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveRecordsThunk.fulfilled, (state, action) => {
        state.Success = action.payload.Success;
        state.Msg = action.payload.Msg;
        state.status = "succeeded";
      })
      .addCase(saveRecordsThunk.rejected, (state, action) => {
        const errorData = parseErrorMessage(action.error.message);
        state.Success = errorData.Success;
        state.Msg = errorData.Msg;
        state.status = "failed";
      });
  },
});

export const getAllEmployeesData = (state: RootState) => state.employees.Data;
export const fetchEmployeesStatus = (state: RootState) =>
  state.employees.status;
export const { addRow, updateRow } = employeesSlice.actions;
export default employeesSlice.reducer;
