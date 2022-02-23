import React from "react";




function City({thecity}) {

    

    // const [city, setCity] = useState(null);
    
    // useEffect(()=>{
    //     setCity(thecity)
    // }, [])/// como el componentDidMount.    

 console.log(thecity)
 return <div> 
    {thecity ? 
    <div>
        <div><h2>{thecity.name}</h2>
        <h4>Current Weather</h4></div>
        
        <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{Math.round(thecity.min)}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{Math.round(thecity.max)}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+thecity.img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        
    </div> 
     :
      <>Ciudad no encontrada</>  
} 
</div>
}

export default City;