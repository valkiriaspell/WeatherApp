import React, { useState } from 'react';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import {Route, Switch} from 'react-router-dom';
import About from '../components/about';
import City from '../components/City routerV5';
import Contact from '../components/Contact';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (    
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
      <Route path="/about" exact> 
      <About/>
      </Route>
      <Route path="/Contact" exact> 
      <Contact/>
      </Route>
      <Route path="/city/:cityId" render={(props) => { let city = onFilter(props.match.params.cityId) 
      return <City thecity={city}/>}}/>
              
      <Route path="/">
        <Cards 
        cities={cities} 
        onClose={onClose}/>
        </Route>
      {/* arriba lo de ciudad/:cityId indica que el valor real que se vea ahi ingrese al params de esa url con ese nombre osea si llego a ciudad/285965 en su params habria un objeto con una propiedad cityId:285965 */}      
        </Switch>      
   </div>   
  );
}
export default App;
