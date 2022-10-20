import React from "react";
import axios from "axios";
import {useState} from "react";

function App() {

  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const API_KEY = "614f734515b5ebb1a40e59ef2c368a27";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url
        })
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  }

  return (
    <div className="App">
      <input 
      placeholder="도시를 입력하세요" 
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      type="text"
      onKeyDown={searchWeather}>
      </input>
      {Object.keys(result).length !== 0 && (
          <div>
            <div className="city">{result.data.name}</div>
            <div className="temperature">{result.data.main.temp}</div>
            <div className="sky">{result.data.weather[0].main}</div>
          </div>
        )}
    </div>
  );
}

export default App;
