import "./App.css";
import { DataTable } from "./components/ui/table/DataTable";
import { columns } from "./components/ui/table/columns";
import DataTableRowActions from "./components/ui/table/DataTableRowActions";
import { useSelector } from "react-redux";
import { getAllEmployeesData } from "./features/employees/employeesSlice";

function App() {
  const employees = useSelector(getAllEmployeesData);

  console.log("employees", employees);

  return (
    <div className="w-full h-screen p-4">
      <div className="w-full h-screen flex justify-center items-center">
        {/* TABLE CONTAINER */}
        <div className="p-4 max-w-5xl w-full flex flex-col text-center">
          <DataTableRowActions />
          <DataTable columns={columns} data={employees} />
        </div>
      </div>
    </div>
  );
}

export default App;
