import "./App.css";
import { Button } from "@/components/ui/button";
import { DataTable } from "./components/ui/table/DataTable";
import { columns } from "./components/ui/table/columns";
import { twMerge } from "tailwind-merge";
import { getRecords, saveRecords } from "./actions/tableActions";
import DataTableRowActions from "./components/ui/table/DataTableRowActions";
import { useState } from "react";

function App() {
  const data = [];

  return (
    <div className="w-full h-screen p-4">
      <div className="w-full h-screen flex justify-center items-center">
        {/* TABLE CONTAINER */}
        <div className="p-4 flex flex-col w-full max-w-5xl text-center">
          <DataTableRowActions
          // getRecords={getRecords}
          // saveRecords={saveRecords}
          />
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
