import React from "react";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";
import "./Search.css";

function Search() {

  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const API_KEY = "614f734515b5ebb1a40e59ef2c368a27";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

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
    <div className="weather-container">
      <div className="weather-input">
      <input 
        placeholder="도시를 입력하세요" 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        type="text"
        onKeyDown={searchWeather}>
        </input>
      {Object.keys(result).length !== 0 && (
          <div className="weather-data">
            <div className="weather-data-left">
              <div className="title">지역</div>
              <div className="title">온도</div>
              <div className="title">상태</div>
            </div>
            <div className="weather-data-right">
              <div className="city">
                {result.data.name}
              </div>
              <div className="temperature">
                {result.data.main.temp}
              </div>
              <div className="sky">
                {result.data.weather[0].main}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="search-btn-container">
        <button className="search-btn">
          <Link to={"/"} className="search-link">
            현재 위치 날씨
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Search;
