import { useState } from "react"; // Import useState hook from React
import WeatherInfo from "./WeatherInfo"; // Import the WeatherInfo component

function WeatherApp() {
  // Declare state variables
  const [cityName, setCityName] = useState(""); // State for storing the city name input by the user
  const [weatherData, setWeatherData] = useState({}); // State for storing weather data fetched from the API

  // Function to handle changes in the city name input field
  const changeCityInput = (e) => {
    setCityName(e.target.value); // Update the city name state with the value entered by the user
  };

  // Async function to fetch weather data from the API
  const fetchWeatherAPI = async () => {
    // API key and URL to fetch weather data
    const ENTER_API_KEY = "5c0cd359a9780f177327881a90598d06";
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ENTER_API_KEY}`;
    
    // Fetch data from the API
    const resp = await fetch(APIurl);
    const respJson = await resp.json(); // Convert response to JSON
    setWeatherData(respJson); // Update the weather data state with the fetched data
  };

  // Function to handle mouse out event on the input field
  let handleMouseOut = (e) => {
    fetchWeatherAPI(); // Fetch weather data when the mouse leaves the input field
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="text-center text-success">React Weather App</h3>
            <div className="form-group">
              {/* Input field for entering city name */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter City Name"
                onChange={changeCityInput} // Call changeCityInput on input change
                onMouseOut={handleMouseOut} // Call handleMouseOut on mouse out
                value={cityName} // Bind input field value to cityName state
              />
            </div>
            {/* WeatherInfo component to display the weather information */}
            <WeatherInfo cityName={cityName} weatherData={weatherData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp; // Export the WeatherApp component as the default export
