// import logo from './logo.svg';
import './App.css';
import weatherdata from './weatherData';
import WeatherIcons from './WeatherIcons';

// function LoopData(weatherdata){
//   return (
//     <WeatherIcons
//     key={weatherdata.img}
//     img={weatherdata.img}
//     conditions={weatherdata.conditions}
//     time={weatherdata.time}
//     />
//   );
// }

function App() {
  return (
    <div>
      <h1>My WeatherIcons App</h1> 
        <section>
          {/* {weatherdata.map(LoopData)} */}
        {weatherdata.map((weather) => {
          return <WeatherIcons key={weather.img} {...weather}></WeatherIcons>
        })}
        </section>
    </div>
  );
}

export default App;
