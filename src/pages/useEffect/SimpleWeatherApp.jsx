import { useEffect, useState } from "react";

const SimpleWeatherApp = () => {
  const [weatherDataSet, setWeatherDataSet] = useState([]);
  const [country, setCountry] = useState("");
  const [cityName, setCityName] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [latValue, setLatValue] = useState("");
  const [longValue, setLongValue] = useState("");

  useEffect(
    function () {
      async function weatherData() {
        try {
          const response = await fetch(
            //   "https://api.openweathermap.org/data/2.5/weather?lat=6.92&lon=79.86&appid=9f820d8577d801c6d6f2ea6c40e03566"
            `https://api.openweathermap.org/data/2.5/weather?lat=${latValue}&lon=${longValue}&appid=9f820d8577d801c6d6f2ea6c40e03566`
          );

          if (!response.ok) {
            throw new Error("Data not fetched!");
          }

          const data = await response.json();
          setWeatherDataSet(data);
          setCountry(data.sys.country);
          console.log(data.sys.country);
        } catch (error) {
          console.log(error);
        }
      }

      weatherData();
    },
    [latValue, longValue]
  );

  console.log(cityName);

  function submitValues() {
    const newLatV = parseFloat(lat);
    const newLongV = parseFloat(long);

    setLatValue(newLatV);
    setLongValue(newLongV);
  }

  console.log(latValue, longValue);

  return (
    <div>
      <ul>
        <li>{weatherDataSet.name}</li>

        <li>{country}</li>

        <input
          type="text"
          placeholder="enter lat"
          className="border-2 border-black mr-4"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />

        <input
          type="text"
          placeholder="enter long"
          className="border-2 border-black"
          value={long}
          onChange={(e) => setLong(e.target.value)}
        />

        <button
          onClick={submitValues}
          className="border-2 border-black bg-slate-500 text-white px-3 py-1.5 ml-4"
          type="text"
        >
          Submit
        </button>

        <p>lat value = {latValue}</p>
      </ul>
    </div>
  );
};

export default SimpleWeatherApp;
