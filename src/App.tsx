import "./App.css";
import { Button } from "@/components/ui/button";
import { DataTable } from "./components/ui/table/DataTable";
import { columns } from "./components/ui/table/columns";
import { twMerge } from "tailwind-merge";
import { getRecords, saveRecords } from "./actions/tableActions";
import DataTableRowActions from "./components/ui/table/DataTableRowActions";

function App() {
  const data = [];

  return (
    <div className="w-full h-screen">
      <div className="w-full h-screen flex justify-center items-center">
        {/* TABLE CONTAINER */}
        <div className="w-full max-w-5xl text-center">
          <DataTableRowActions />
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
