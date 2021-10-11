// import logo from './logo.svg';
import './App.css';
import weatherdata from './weatherData';
import WeatherIcons from './WeatherIcons';

function App() {
  return (
    <div>
      <WeatherIcons
      img={weatherdata[0].img}
      conditions={weatherdata[0].conditions}
      time={weatherdata[0].time}
      />
      <WeatherIcons
      img={weatherdata[1].img}
      conditions={weatherdata[1].conditions}
      time={weatherdata[1].time}
      />
      <WeatherIcons
      img={weatherdata[2].img}
      conditions={weatherdata[2].conditions}
      time={weatherdata[2].time}
      />
      <WeatherIcons
      img={weatherdata[3].img}
      conditions={weatherdata[3].conditions}
      time={weatherdata[3].time}
      />
      <WeatherIcons
      img={weatherdata[4].img}
      conditions={weatherdata[4].conditions}
      time={weatherdata[4].time}
      />
    </div>
  );
}

export default App;
