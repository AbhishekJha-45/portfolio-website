"use client";
import React, { useState } from "react";
import ThermostatOutlinedIcon from "@mui/icons-material/ThermostatOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
const EmailSection = () => {
  const [weatherData, setWeatherData] = useState("");
  const [showTable, setShowTable] = useState(false);
  const getIconColorAndComponent = (temp) => {
    if (temp > 40) {
      return {
        color: "text-red-500",
        icon: <ThermostatOutlinedIcon fontSize="small" />,
      };
    } else if (temp < 10) {
      return {
        color: "text-blue-300",
        icon: <AcUnitOutlinedIcon fontSize="small" />,
      };
    } else if (temp >= 10 && temp <= 20) {
      return {
        color: "text-blue-200",
        icon: <ThermostatOutlinedIcon fontSize="small" />,
      };
    } else if (temp > 20 && temp <= 30) {
      return {
        color: "text-orange-400",
        icon: <ThermostatOutlinedIcon fontSize="small" />,
      };
    } else if (temp > 30 && temp <= 40) {
      return {
        color: "text-orange-400",
        icon: <ThermostatOutlinedIcon fontSize="small" />,
      };
    }

    // Default values if no condition matches
    return { color: "", icon: null };
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      city: e.target.city.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/projects/weather-forcast";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData.payload);
    if (response.ok) {
      setWeatherData(resData.payload);
    } else {
      setWeatherData("-1");
    }
  };
  const temp = getIconColorAndComponent(
    weatherData !== "" ? weatherData.main.temp : ""
  );
  const feels_like = getIconColorAndComponent(
    weatherData !== "" ? weatherData.main.feels_like : ""
  );
  const temp_max = getIconColorAndComponent(
    weatherData !== "" ? weatherData.main.temp_max : ""
  );
  const temp_min = getIconColorAndComponent(
    weatherData !== "" ? weatherData.main.temp_min : ""
  );
  return (
    <main className="flex  min-h-screen flex-col bg-[#121212] overflow-auto">
      <form className="container mx-auto  py-4 mt-24" onSubmit={handleSubmit}>
        <div className="mb-6 lg:flex justify-between flex-wrap">
          <div className="flex lg:flex-row gap-y-5 flex-col justify-center items-center lg:gap-x-5">
            <label htmlFor="city" className="text-white  text-sm font-medium">
              Enter City Name
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block    p-2.5"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-[#18191E] mt-5 lg:mt-0 ml-5 hover:bg-white hover:text-black text-white font-medium py-2.5 px-5 rounded-lg "
          >
            Search
          </button>
        </div>
      </form>
      {weatherData !== "" && weatherData !== "-1" ? (
        <section className="lg:px-24 flex  relative px-3 ">
          <table>
            <caption className="text-white my-5 pb-5 text-4xl ">{`Weather Forcast of ${weatherData.name}`}</caption>
            <thead>
              <tr>
                <th scope="col">Temperature</th>
                <th scope="col">Feels Like</th>
                <th scope="col">Humidity</th>
                <th scope="col">Temp Max</th>
                <th scope="col">Temp Min</th>
                <th scope="col">Weather</th>
                <th scope="col">Wind Speed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Temperature">
                  <span className={temp.color}>{temp.icon}</span>
                  {weatherData.main.temp}
                  <sup className="superscript">•</sup>C
                </td>
                <td data-label="Feels Like ">
                  <span className={feels_like.color}>{feels_like.icon}</span>
                  {weatherData.main.feels_like}
                  <sup className="superscript">•</sup>C
                </td>
                <td data-label="Humidity">{weatherData.main.humidity}</td>
                <td data-label="Temp Max">
                  <span className={temp_max.color}>{temp_max.icon}</span>
                  {weatherData.main.temp_max}
                  <sup className="superscript">•</sup>C
                </td>
                <td data-label="Temp Min">
                  <span className={temp_min.color}>{temp_min.icon}</span>
                  {weatherData.main.temp_min}
                  <sup className="superscript">•</sup>C
                </td>
                <td data-label="Weather">{weatherData.weather[0].description}</td>
                <td data-label="Clouds">{weatherData.wind.speed}</td>
              </tr>
            </tbody>
          </table>
        </section>
      ) : (
        <h1>hello</h1>
      )}
    </main>
  );
};

export default EmailSection;
