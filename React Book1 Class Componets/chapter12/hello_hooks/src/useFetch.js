import { useState, useEffect } from 'react';

// Custom hook for fetching data from a URL
const useFetch = (url) => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Effect hook to fetch data when the URL changes
  useEffect(() => {
    // Fetch data from the provided URL
    fetch(url)
      // Parse response as JSON
      .then(response => response.json())
      // Update state with fetched data
      .then(data => setData(data));
  }, [url]); // Dependency array ensures effect runs when URL changes

  // Return the fetched data
  return data;
}

export default useFetch;
