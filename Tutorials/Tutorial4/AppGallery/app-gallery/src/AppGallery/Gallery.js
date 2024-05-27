import Tabs from "./Tabs"; // Import the Tabs component
import Items from "./Items"; // Import the Items component
import Data from "./Data"; // Import the Data module
import { useState } from "react"; // Import the useState hook from React

function Gallery() {
  const [data, setData] = useState(Data); // Initialize state with the data from Data module

  // Extract unique categories from the data
  const categoryData = Data.map((value) => {
    return value.category;
  });
  const tabsData = ["all", ...new Set(categoryData)]; // Create tabs data with "all" and unique categories

  // Function to filter data based on the selected category
  const filterCategory = (category) => {
    if (category === "all") {
      setData(Data); // If "all" is selected, show all data
      return;
    }
    const filteredData = Data.filter((value) => {
      return value.category === category; // Filter data by category
    });
    setData(filteredData); // Update state with filtered data
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-1"></div> {/* Empty column for spacing */}
        <div className="col-sm-10">
          <Tabs filterCategory={filterCategory} tabsData={tabsData} /> {/* Render Tabs component */}
          <Items data={data} /> {/* Render Items component with the filtered data */}
        </div>
        <div className="col-sm-1"></div> {/* Empty column for spacing */}
      </div>
    </div>
  );
}

export default Gallery; // Export the Gallery component as default
