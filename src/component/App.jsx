// require('dotenv').config()

import React, { useEffect, useState } from "react";
import {Button} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";


function App() {
  
  const [items, setItem] = useState([]);
  const [city, setInput] = useState("Delhi");
  const [search, setSearch] = useState("Delhi");
  const [cardDisplay, setCardDisplay] = useState(false);

  

  function onsubmit(event) {
    setSearch(city);
    setCardDisplay(true);
    setInput("");
    event.preventDefault();
    
  }
  const apiKey = process.env.REACT_APP_API_KEY;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q="+ search +"&appid="+ apiKey +"&units=metric";

  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((result) => {
        setItem(result);
      });
  }, [url]);



  return (
    <div>
      <Header />
      <div className="card">
        <div>
          <form onSubmit={onsubmit}>
            <input 
              className="input-field"
              onChange={(event) => setInput(event.target.value)}
              onClick={() => setInput("")}
              type="text"
              value={city}
              placeholder="Search the City Name"
            ></input>
            <span className="search">
              <Button size="medium" variant="contained" color="primary" type="submit">
                search
              </Button>
            </span>
          </form>
        </div>
      
        {cardDisplay &&
        
        <div className="root">
          <hr className="divider"></hr>  
            <div>
              <h3>{items.name}</h3> 
              <img
                className="weather-icon"
                src={"http://openweathermap.org/img/w/"+ items.weather[0].icon+ ".png"}
                alt="weather icon"
              />
              <h1><strong>{items.main.temp}</strong><span>°C</span></h1>
              <p>{items.main.temp_min}°C / {items.main.temp_max} °C</p>
            </div>
        
            <div class="details">
          
              <h4>Feels like: <strong>{items.main.feels_like}</strong> °C</h4>
              <h4>Wind Speed: <strong>{items.wind.speed}</strong> km/h</h4>
              <h4>Pressure: <strong>{items.main.pressure}</strong> mb</h4>
              <h4>Humidity: <strong>{items.main.humidity}</strong> %</h4>
            </div>
        </div>
        }
      </div>
        <Footer/>
      
      
    </div>
  );
}

export default App;
