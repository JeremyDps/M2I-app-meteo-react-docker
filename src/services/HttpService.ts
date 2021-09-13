import axios from 'axios';

class HttpService {

    baseUrl: string = 'https://api.openweathermap.org/data/2.5/';
    apiKey: string = 'f44e947afc6c0878ed4463a841db0599';

    // headers = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // }

    HttpHeaders = new Headers();
    init: RequestInit = {
        method: "GET",
        headers: this.HttpHeaders,
        mode: 'cors'
    }

    async getCurrentWeather(city: string) {
        // return fetch(`${this.baseUrl}weather?q=${city}&appid=${this.apiKey}`, 
        // this.init)
        //     .then(res => {console.log(res); res.json()})

        return axios.get(`${this.baseUrl}weather?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`);
    }

    async getHourlyForecast(city: string) {
        // return fetch(`${this.baseUrl}forecast?q=${city}&appid=${this.apiKey}`, this.init)   
        //     .then(res => res.json())
        //     .then(a => console.log("a", a));
            
        return axios.get(`${this.baseUrl}forecast?q=${city}&appid=${this.apiKey}&units=metric&lang=fr`);
    }
}

export const httpService = Object.freeze(new HttpService());