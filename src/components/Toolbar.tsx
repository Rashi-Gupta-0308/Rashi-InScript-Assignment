const Toolbar = () => {
  const logAction = (action: string) => console.log(`${action} clicked`);

  return (
    <div className="flex gap-4 items-center text-sm text-gray-700 mb-2">
      <button onClick={() => logAction("Hide fields")}>📁 Hide fields</button>
      <button onClick={() => logAction("Sort")}>↕ Sort</button>
      <button onClick={() => logAction("Filter")}>🔍 Filter</button>
      <button onClick={() => logAction("Cell view")}>🧱 Cell view</button>
    </div>
  );
};

export default Toolbar;
