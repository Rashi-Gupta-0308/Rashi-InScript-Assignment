import React from "react";
import { useTable } from "react-table";
import { spreadsheetData } from "../data/data";

const SpreadsheetTable = () => {
  const columns = React.useMemo(
    () => [
      { Header: "Job Request", accessor: "job" },
      { Header: "Submitted", accessor: "submitted" },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }: any) => {
          const colorMap: any = {
            "In-process": "bg-yellow-100 text-yellow-800",
            "Need to start": "bg-blue-100 text-blue-800",
            Complete: "bg-green-100 text-green-800",
            Blocked: "bg-red-100 text-red-800",
          };
          return (
            <span className={`px-2 py-1 rounded text-xs ${colorMap[value]}`}>
              {value}
            </span>
          );
        },
      },
      { Header: "Submitter", accessor: "submitter" },
      {
        Header: "URL",
        accessor: "url",
        Cell: ({ value }: any) => (
          <a href="#" className="text-blue-600 underline">
            {value}
          </a>
        ),
      },
      { Header: "Assigned", accessor: "assigned" },
      {
        Header: "Priority",
        accessor: "priority",
        Cell: ({ value }: any) => {
          const colorMap: any = {
            High: "text-red-500",
            Medium: "text-orange-500",
            Low: "text-blue-500",
          };
          return (
            <span className={`font-semibold ${colorMap[value]}`}>{value}</span>
          );
        },
      },
      { Header: "Due Date", accessor: "due" },
      { Header: "Est. Value", accessor: "value" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: spreadsheetData });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="min-w-full table-auto border">
      <thead className="bg-gray-50">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="text-left px-4 py-2 border-b text-sm text-gray-600"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="hover:bg-gray-50">
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className="px-4 py-2 border-b text-sm"
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SpreadsheetTable;
