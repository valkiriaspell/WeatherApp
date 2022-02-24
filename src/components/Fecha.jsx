import React from "react";
let date = new Date();

export default function Fecha() {
    return(
        <div>
        <span>Valkiria - Weather App</span> <br></br>
        <span>{date.toDateString()}</span>
        </div>
    )
}; 