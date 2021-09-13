import React from 'react'
import { httpService } from "./HttpService";

class MeteoService {

    async findCurrentWeather(city) {
        return httpService.getCurrentWeather(city);
    }

    async findHourlyForecast(city) {
        return httpService.getHourlyForecast(city);
    }
}

export const meteoService = Object.freeze(new MeteoService());