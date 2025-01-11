import { addRow, getRecords } from "@/features/employees/employeesSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/app/store";

const DataTableRowActions = () => {
  const dispatch = useAppDispatch();

  const handleAddRow = () => {
    dispatch(addRow());
  };

  const handleGetRecords = () => {
    dispatch(getRecords());
  };

  const handleSaveRecords = () => {};

  return (
    <div className="mb-8 w-full flex justify-between">
      <Button onClick={handleAddRow} className="text-white bg-blue-600">
        Add
      </Button>
      <Button onClick={handleSaveRecords} className="text-white bg-green-700">
        Save
      </Button>
      <Button onClick={handleGetRecords} variant="destructive">
        Update
      </Button>
    </div>
  );
};
export default DataTableRowActions;
