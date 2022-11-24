import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
import "./Main.css";

function Main() {

    const WeatherImgBox = styled.div`
        background-color : ${props => props.getWeatherImg === "warm" ? "red" : "blue"};
    `

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
        let response = await fetch(url);
        let data = await response.json();
        setWeather(data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    const nowTime = moment().format("hh:mm");

    const getWeatherImg = () => {
        let warm, cold;

        if({weather} >= 14) {
            return warm;
        } else {
            return cold;
        }
    }

    return (
        <div className="main">
            <div className="main-weather-container">
                <div className="main-place">
                    <div className="main-palce-txt">현재 위치</div>
                    {weather?.name}
                </div>
                <div className="main-time">
                    {nowTime}
                </div>
                <div className="main-weather-info">
                    {weather?.main.temp}
                    <span>º</span>
                </div>
            </div>
            <WeatherImgBox>
                <div className="weather-img">
                    dddddddd
                </div>
            </WeatherImgBox>
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