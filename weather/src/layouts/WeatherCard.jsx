import React from 'react'
const WeatherCard = ({location,temp,det,weather,humidity}) => {
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
                        <p>{humidity}</p>
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