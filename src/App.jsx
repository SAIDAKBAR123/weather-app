import {
  Row,
  Col,
  ButtonSearch,
  Input,
  List,
  ListItem,
  Divider,
  Section,
  WeatherInfo
} from "./components";
import { useEffect, useState } from "react";
import { getCountries, getWeather } from "./utils/request";
import { REGIONS, WEATHER } from "./data";
import "./App.scss";

const STYLES = {
  container: {
    height: "96vh",
    padding: "10px 10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  blur_card_container: {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    gap: 2,
  },
}

const App = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const [weatherInfo, setWeatherInfo] = useState({});

  const searchCountry = async (country) => {
    const fetchData = await getCountries({ country, limit: 10 });
    if (fetchData.length === 0) {
      return alert("No country is available with this");
    }
    searchWeather({ lat: fetchData[0].lat, long: fetchData[0].lon });
  };

  const searchWeather = async (location) => {
    const getWeatherApi = await getWeather(location);
    console.log('getWeatherApi', getWeatherApi)
    setWeatherInfo(getWeatherApi);
  };

  useEffect(() => {
    searchCountry("Tashkent");
  }, [])

  const getCode = () => {
    if (weatherInfo?.weather[0]?.id === 800) {
      return "800"
    }
    if (weatherInfo?.weather[0]?.id) {
      console.log((String(weatherInfo?.weather[0]?.id)?.[0]))
      return (String(weatherInfo?.weather[0]?.id)?.[0]);
    }
    return 1;
  }
  return (
    <div>
      <Row url={weatherInfo.name ? WEATHER.get(getCode()): WEATHER.get('1')}>
        <Col style={{ background: "", width: "70%" }}>
          <div style={STYLES.container}>
            <h4 style={{ marginLeft: 14 }}>The.Weather</h4>
            {weatherInfo?.name && <WeatherInfo weather={weatherInfo} />}
          </div>
        </Col>
        <Col className={"blur_card"}>
          <div style={STYLES.blur_card_container}>
            <Input
              style={{ margin: "0 auto" }}
              placeholder="Another Location"
              onChange={(e) => setSearchedValue(e.target.value)}
              onKeyPress={(e) => {
                e.key === "Enter" ? searchCountry(searchedValue) : null;
              }}
            ></Input>
            <ButtonSearch onClick={() => searchCountry(searchedValue)} />
          </div>
          <Section>
            <List>
              {REGIONS.map((el) => (
                <ListItem
                  key={el.id}
                  onClick={() => searchWeather({ lat: el.lat, long: el.lng })}
                >
                  {el.name}
                </ListItem>
              ))}
            </List>
          </Section>
          <Section>
            <Divider />
          </Section>
          {weatherInfo?.clouds && (
            <Section>
              <List title="Weather Deatail">
                <ListItem value={weatherInfo?.clouds?.all + "%"}>
                  Cloudy
                </ListItem>
                <ListItem value={weatherInfo?.main?.humidity + "%"}>
                  Humidity
                </ListItem>
                <ListItem value={weatherInfo?.wind?.speed + " km/h"}>
                  Wind
                </ListItem>
                <ListItem value={weatherInfo?.main?.pressure + " Pha"}>
                  Pressure
                </ListItem>
              </List>
            </Section>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;
