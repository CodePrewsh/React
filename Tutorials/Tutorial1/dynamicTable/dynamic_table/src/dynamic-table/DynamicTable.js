import { useEffect } from "react";  // Import useEffect from React, though it is not used in this component
import TableData from "./TableData"; // Import the TableData array from the specified file

function DynamicTable() {
  // Get table column names by extracting keys from the first object in TableData
  const column = Object.keys(TableData[0]);

  // Function to generate table header cells
  const ThData = () => {
    // Map over column names to create table header cells
    return column.map((data) => {
      return <th key={data}>{data}</th>; // Use the column name as the key and display it in the header cell
    });
  };

  // Function to generate table row data
  const tdData = () => {
    // Map over TableData to create rows
    return TableData.map((data, index) => {
      return (
        <tr key={index}>
          {/* Map over column names to create table cells for each row */}
          {column.map((v) => {
            return <td key={v}>{data[v]}</td>; // Use column name as key and display corresponding data in the cell
          })}
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>{ThData()}</tr>  // Call ThData function to generate table headers
      </thead>
      <tbody>{tdData()}</tbody>  // Call tdData function to generate table body rows
    </table>
  );
}

export default DynamicTable; // Export the DynamicTable component as the default export
