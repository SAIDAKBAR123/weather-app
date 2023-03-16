const API = 'b4acff7684fa39b7986123455be7bcbc'

export const getCountries = async ({country, limit = 10}, options) => {
    const WEATHER_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=${limit}&appid=${API}`
    const response = await fetch(WEATHER_URL, options);
    const data = await response.json();
    return data;
}

export const getWeather = async ({lat, long}, options) => {
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API}&units=metric`
    const response = await fetch(WEATHER_URL, options);
    const data = await response.json();
    return data;
}

