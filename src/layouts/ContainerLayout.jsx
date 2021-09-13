import React, { useEffect, useState } from 'react'
import { meteoService } from '../services/MeteoService';
import '../App.css';
import { Weather } from '../components/Weather';
import { FormGetOtherCity } from '../components/FormGetOtherCity';

export const ContainerLayout = () => {

    const [currentWeather, setcurrentWeather] = useState([]);

    const [forecast, setforecast] = useState([]);

    useEffect(() => {
        meteoService.findHourlyForecast("Paris").then(data => setforecast(data.data));
        meteoService.findCurrentWeather("Paris").then(data => setcurrentWeather(data.data));
    }, [])

    const onFinish = (city) => {
        console.log("nouvelle ville", city);
        meteoService.findHourlyForecast(city).then(data => setforecast(data.data));
        meteoService.findCurrentWeather(city).then(data => setcurrentWeather(data.data));
    }

    return (
        <>
            <FormGetOtherCity setResearchCity={onFinish} />
            <h2>Meteo pour {currentWeather.name}</h2>
            <div className="container">
                {forecast.list !== undefined && forecast.list.map((f, index) => {
                    return <Weather key={index} weather={f} />
                })}
            </div>
        </>
    )
}