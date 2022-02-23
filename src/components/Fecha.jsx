import React from "react";
let date = new Date();

export default function Fecha() {
    return(
        <div>
        <span>{date.toDateString()}</span>
        </div>
    )
}; 