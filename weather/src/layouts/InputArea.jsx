import { useState } from 'react'

const InputArea = (props) => {
    const [search, setSearch] = useState('');
    const generateEndpointWithName = (name) => {
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_ID}`)
        return `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_API_ID}`;        
    }
    const generateEndpoint = (latitude, longitude) => {
        console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_ID}`)
        return `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_ID}`
    }
    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const { latitude, longitude } = position.coords;
                const currentLocation = { latitude, longitude };
                resolve(currentLocation);
              },
              (error) => {
                reject(`Error getting geolocation: ${error.message}`);
              }
            );
          } else {
            reject('Geolocation is not supported by this browser.');
          }
        });
      };
      let currentGeoLocation = null;      
      getCurrentLocation()
        .then((location) => {
          currentGeoLocation = location;
        })
        .catch((error) => {
          console.error(error);
        });

    return (

        <div className="justify-center aree">
            <div className="search-section">
                <div className="InputContainer">
                    <input type="text"
                        onChange={e => {
                            setSearch((e.target.value))
                        }}
                        name="text"
                        value={search}
                        className="input"
                        id="input"
                        placeholder="Search" />
                    <abbr title="Search">
                        <button id="location-button" className="micButton" onClick={()=>{
                            props.getEndpoint(generateEndpointWithName(search))
                        }}>
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </abbr>

                    <div className="border"></div>
                    <abbr title="Search for current location">
                        <button id="location-button" className="micButton" onClick={()=>{
                           props.getEndpoint( generateEndpoint(currentGeoLocation.latitude,currentGeoLocation.longitude))
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-crosshair" viewBox="0 0 16 16">
                                <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
                            </svg>
                        </button>
                    </abbr>
                </div>
            </div>
        </div>

    )
}
export default InputArea