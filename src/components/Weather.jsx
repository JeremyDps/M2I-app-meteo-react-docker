import React from 'react'
import '../App.css'


export const Weather = (props) => {
    console.log(props.weather);
    
    return (
        <div className="weather-block">
            {/* <p>{props.weather}</p> */}
            <p>{props.weather.dt_txt}  </p>
            <b>{props.weather.weather[0].description}</b>
            <p>Température max: {props.weather.main.temp_max} °C</p>
            <p>Température min: {props.weather.main.temp_min} °C</p>
            <p>Température ressentie: {props.weather.main.feels_like} °C</p>
            <p>Vitesse du vent: {props.weather.wind.speed} km/h</p>
            <p>Orientation du vent: {props.weather.wind.deg} deg</p>
        </div>
    )
}