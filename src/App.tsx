import React from "react";
import SpreadsheetTable from "./components/SpreadsheetTable";
import HeaderBar from "./components/HeaderBar";
import Toolbar from "./components/Toolbar";
import TabBar from "./components/TabBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="p-4">
        <HeaderBar />
        <Toolbar />
        <div className="bg-white shadow rounded-md overflow-x-auto mt-4">
          <SpreadsheetTable />
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="border-t pt-2 px-4 pb-4">
        <TabBar />
      </div>
    </div>
  );
}

export default App;
