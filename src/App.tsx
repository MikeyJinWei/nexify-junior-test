import "./App.css";
import { DataTable } from "./components/table/DataTable";
import { columns } from "./components/table/columns";
import DataTableRowActions from "./components/table/DataTableRowActions";
import { getAllEmployeesData } from "./features/employees/employeesSlice";
import { useAppSelector } from "./app/store";

function App() {
  const employees = useAppSelector(getAllEmployeesData);

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
