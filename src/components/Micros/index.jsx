export const WeatherInfo = ({ weather }) => {
    return (
      <div className="weather_info_class">
        <h1>{ Math.floor(weather?.main?.temp)}°</h1>
        <div className="weather_country_class">
          <h3>{weather?.name}</h3>
          <span>10:36 - Tuesday, 22 Oct '19</span>
        </div>
        <div className="weather_status_class">
        <div>
            <img width={80} height={80} src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@4x.png`} alt="asdas" />
        </div>
          <span>{weather?.weather[0]?.main}</span>
        </div>
      </div>
    );
};

export const Section = ({ children }) => {
    return <div style={{ margin: "24px 54px" }}>{children}</div>;
  };