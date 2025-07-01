import React from "react";

const HeaderBar = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="text-sm text-gray-500">
        Workspace &gt; Folder 2 &gt;{" "}
        <span className="font-semibold text-gray-800">Spreadsheet 3</span>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search within sheet"
          className="border rounded px-2 py-1 text-sm"
        />
        <div className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740"
            alt="avatar"
            className="rounded-full w-6 h-6"
          />
          <span className="text-sm">John Doe</span>
        </div>
        <button className="bg-green-500 text-white px-3 py-1 rounded">
          + New Action
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
