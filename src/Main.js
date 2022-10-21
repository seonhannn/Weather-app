import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import "./Main.css";

function Main() {

    const [weather, setWeather] = useState(null);
    const API_key = "614f734515b5ebb1a40e59ef2c368a27";

    const getCurrentLocation = () => {
        // 현재 위치 가져오기
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };

        // 현재 위치 날씨 API 가져오기
    const getWeatherByCurrentLocation = async (lat, lon) => {
        // &units=metric => 섭씨 사용
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
        // url에 데이터를 가져올 때까지 기다려 주세요
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
    };
    
    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div className="main">
            <div className="main-weather-container">
                <div className="main-place">{weather?.name}</div>
                <div className="main-weather-info">
                    {weather?.main.temp}
                    <span>도</span>
                </div>
            </div>
            <div className="main-btn-container">
                <button className="main-btn">
                    <Link to={"/Search"} className="main-link">
                        지역 검색
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Main;