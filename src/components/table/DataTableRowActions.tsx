import {
  addRow,
  getAllEmployeesData,
  getRecordsThunk,
  saveRecordsThunk,
} from "@/features/employees/employeesSlice";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/app/store";

const DataTableRowActions = () => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(getAllEmployeesData);

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const handleGetRecords = () => {
    dispatch(getRecordsThunk());
  };

  const handleSaveRecords = () => {
    dispatch(saveRecordsThunk(employees));
  };

  return (
    <div className="mb-8 w-full flex justify-between">
      <Button onClick={handleAddRow} variant="info">
        Add
      </Button>
      <Button onClick={handleSaveRecords} variant="submit">
        Save
      </Button>
      <Button onClick={handleGetRecords} variant="destructive">
        Update
      </Button>
    </div>
  );
};
export default DataTableRowActions;
