import { useEffect, useState } from "react";
import "./App.scss";
import {
  Row,
  Col,
  ButtonSearch,
  Input,
  List,
  ListItem,
  Divider,
} from "./components";

const IMAGE_URL_RAIN =
  "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701700419.jpg";
const IMAGE_URL =
  "https://images7.alphacoders.com/107/1079360.jpg";

const Section = ({ children }) => {
  return <div style={{ margin: "24px 54px" }}>{children}</div>;
};

const WeatherInfo = () => {
  return (
    <div className="weather_info_class">
      <h1>25°</h1>
      <div className="weather_country_class">
        <h3>London</h3>
        <span>10:36 - Tuesday, 22 Oct '19</span>
      </div>
      <div className="weather_status_class">
        <div>
          ☀️
        </div>
        <span>sunny</span>
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState(IMAGE_URL);
  const searchCountry = () => {};

  useEffect(() => {
    setTimeout(() => {
      setImage(IMAGE_URL_RAIN);
    }, 4000);
  }, []);

  return (
    <div>
      <Row url={image}>
        <Col style={{ background: "", width: "65%" }}>
          <div
            style={{
              height: "96vh",
              padding: "10px 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ marginLeft: 14 }}>The.Weather</h4>
            <WeatherInfo
              value={{
                temperature: "26",
                country: "London",
                date: new Date(),
                weather: "sunny",
              }}
            />
          </div>
        </Col>
        <Col className={"blur_card"}>
          <div
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Input
              style={{ margin: "0 auto" }}
              placeholder="Another Location"
            ></Input>
            <ButtonSearch onClick={searchCountry} />
          </div>
          <Section>
            <List>
              <ListItem>Toshkent</ListItem>
              <ListItem>Samarqand</ListItem>
              <ListItem>Urganch</ListItem>
              <ListItem>Navoiy</ListItem>
              <ListItem>Nukus</ListItem>
            </List>
          </Section>
          <Section>
            <Divider />
          </Section>
          <Section>
            <List title="Weather Deatail">
              <ListItem value={"12%"}>Cloudy</ListItem>
              <ListItem value={"78%"}>Humanity</ListItem>
              <ListItem value={"1km/h"}>Wind</ListItem>
              <ListItem value={"0mm"}>Rain</ListItem>
            </List>
          </Section>
        </Col>
      </Row>
    </div>
  );
}

export default App;
