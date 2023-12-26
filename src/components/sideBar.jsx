import React, { useEffect, useState } from "react";
import WeatherCard from './weatherCard'
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Sidebar() {

  let [searchVal, setSearchVal] = useState("");
  let [weatherData,setWeatherData]=useState("");
  let [latitude,setLatitude]=useState("");
  let [longtitude,setLongtitude]=useState("");

 
  const successCallback = (position) => {
    setLatitude(position.coords.latitude)
    setLongtitude(position.coords.longitude)
  };
  
  const errorCallback = (error) => {
    alert(error);
  };
  
 
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    
    if(latitude && longtitude){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=202de680656456edf4ad0e3ae1574bb0`).then((results) => results.json()).then((data) => {
        setWeatherData(data);
       }); 

    }
  },[longtitude,latitude])



  function weatherApiCall(){
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=202de680656456edf4ad0e3ae1574bb0
        `).then((results) => results.json()).then((data) => {
           setWeatherData(data);
        });
    }


  function getWeatherData(e) {
    searchVal = e.target.value;
    setSearchVal(searchVal);
  }

  return (
    <>
      <div className="side-bar-container">
        <span>
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            size="lg"
            style={{ color: "white" }}
            onClick={weatherApiCall}
          />
        </span>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search...."
          spellCheck="false"
          onChange={getWeatherData}
        />
      </div>
      <WeatherCard weatherResponse={weatherData} />
    </>
  );
}
