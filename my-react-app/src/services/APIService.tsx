const getWeatherData = async function (city: string) {
  const APIkey = "24f553f38495c07ad01042098fa56ba3";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=${APIkey}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  // WeatherContext = createContext();
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  return data;
  //   {
  //     "coord": {
  //         "lon": 27.5667,
  //         "lat": 53.9
  //     },
  //     "weather": [
  //         {
  //             "id": 804,
  //             "main": "Clouds",
  //
  //
  //         }
  //     ],
  //
  //
  //     "visibility": 10000,
  //     "wind": {
  //         "speed": 2.73,
  //         "deg": 342,
  //         "gust": 5.46
  //     },
  //     "clouds": {
  //         "all": 95
  //     },
  //     "dt": 1763830940,
  //     "sys": {
  //         "country": "BY",
  //         "sunrise": 1763790600,
  //         "sunset": 1763820125
  //     },
  //     "timezone": 10800,
  //     "id": 625144,
  //     "name": "Minsk",
  //     "cod": 200
  // }
};

export default getWeatherData;
