import React, { useState } from "react";
import './Nav.css';


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <div>
    <div className="BuscadoryAdd">
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <label>Search city </label> <br></br>
      <input 
        className="Buscador"     
        type="text"
        placeholder="Name or part of it..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input type="submit" value="Add" id="btnAdd"/>
    </form>
    </div>
    </div>
  );
}
