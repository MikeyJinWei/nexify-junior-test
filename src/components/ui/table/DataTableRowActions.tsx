import { getRecords, saveRecords } from "@/actions/tableActions";
import { Button } from "../button";

const DataTableRowActions = () => {
  const addNewRow = () => {};

  return (
    <div className="mb-8 w-full flex justify-between">
      <Button onClick={addNewRow} className="text-white bg-blue-600">
        Add
      </Button>
      <Button onClick={saveRecords} className="text-white bg-green-700">
        Save
      </Button>
      <Button onClick={getRecords} className="text-white bg-red-600">
        Update
      </Button>
    </div>
  );
};
export default DataTableRowActions;
