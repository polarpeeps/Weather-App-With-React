import React from 'react'
const WeatherCard = ({location,temp,det,weather}) => {
    console.log(weather)
    // const imgSource="./images/"+det+".png"
    return (
        <div   >
            <div className="card">
                <div className="card-content">
                    <div className="card-top">
                        <span className="card-title"> {temp} °C</span>
                        <p>{det}</p>
                    </div>
                    <div className="card-bottom">
                        <p>{location}</p>
                        <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
                    </div>
                </div>
                <div className="card-image">
                    <img src={`https://openweathermap.org/img/wn/${weather}@2x.png`} alt={weather} width="82" height="82" fill="white" viewBox="0 0 16 16">
                    </img>
                </div>
            </div>
        </div>
    )
}
export default WeatherCard