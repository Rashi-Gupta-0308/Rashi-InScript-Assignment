import React, { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const TabBar = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="flex gap-4 text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            console.log(`Switched to ${tab}`);
          }}
          className={`px-3 py-1 rounded ${
            tab === activeTab ? "bg-green-100 text-green-800" : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
      <button onClick={() => console.log("Add tab clicked")}>+</button>
    </div>
  );
};

export default TabBar;
