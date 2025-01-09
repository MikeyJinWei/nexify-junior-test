import { getRecords } from "@/features/employees/employeesSlice";
import { Button } from "../button";
import { useDispatch, useSelector } from "react-redux";

const DataTableRowActions = () => {
  const dispatch = useDispatch();
  const addNewRow = () => {};

  const handleGetRecords = () => {
    dispatch(getRecords());
  };

  const handleSaveRecords = () => {};

  return (
    <div className="mb-8 w-full flex justify-between">
      <Button onClick={addNewRow} className="text-white bg-blue-600">
        Add
      </Button>
      <Button onClick={handleSaveRecords} className="text-white bg-green-700">
        Save
      </Button>
      <Button onClick={handleGetRecords} className="text-white bg-red-600">
        Update
      </Button>
    </div>
  );
};
export default DataTableRowActions;
