import {useState} from "react";
import React from "react";

function App() {

  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [isReady, setReady] = useState(false);

  // eslint-disable-next-line no-undef
  React.useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.0618&lon=141.3545&appid=7e74fcaea25d17b816ce78868c151c59&units=metric")
        .then(result => result.json())
        .then(jsonresult => {
          setTemp(jsonresult.main.temp);
          setDesc(jsonresult.weather[0].main);
          setIcon(jsonresult.weather[0].icon);
          setReady(true);
        })
        .catch(err => console.error(err))
  }, [])

    if (isReady){
        return (
            <div className="App">
                <h1>일본 삿포로의 현재 날씨</h1>
                <p>섭씨: {temp} °C</p>
                <p>날씨: {desc}</p>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather icon"></img>
            </div>
        );
    }else {
        return <div>Loading...</div>
    }
}

export default App;
