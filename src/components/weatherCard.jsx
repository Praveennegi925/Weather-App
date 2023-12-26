import React from "react";
import "../index.css";

export default function WeatherCard(props) {
  return (
    <>
      <div className="card-container">
        <div id="weather-wrapper">
          <div className="weather-card">
            <div className="current-temp">
              <span className="temp">
                {props.weatherResponse &&
                  Math.round(props.weatherResponse.main.temp - 273)}
                &deg;C
              </span>
              <span className="location">
                {props.weatherResponse && props.weatherResponse.name}
              </span>
              <span className="location">
                {props.weatherResponse && props.weatherResponse.weather[0].description}
              </span>
            </div>
            <div className="current-weather">
              <span className="conditions">
                <img
                  src={
                    props.weatherResponse &&
                    `https://openweathermap.org/img/wn/${props.weatherResponse.weather[0].icon}@2x.png`
                  }
                />
                
              </span>
              
              <div className="info">
                <span className="rain">
                  {props.weatherResponse &&
                    props.weatherResponse.main.humidity + "%"}
                </span>
                <span className="wind">
                  {props.weatherResponse && props.weatherResponse.wind.speed}{" "}
                  MPH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
