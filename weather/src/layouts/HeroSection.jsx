import InputArea from "./InputArea";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { useState } from "react";

const HeroSection = () => {
    const [location, setLocation] = useState('');
    const [temp, setTemp] = useState(null);
    const [det, setDet] = useState("");
    const [weatherIcon,setWeatherIcon]=useState('');
    const [humidity,setHumidity]=useState('');
    const getEndpoint = async (url) => {
        try {
            const response = await axios.get(url);
            const data = await response.data;
            console.log(data)
            // Assuming data contains the fields you're interested in, otherwise you'll need checks here
            setLocation(data.name + ', '+data.sys.country); // Store only the name as location
            setTemp(Math.round(data.main.temp - 273.15)); // Convert Kelvin to Celsius
            setDet(data.weather[0].main);
            setWeatherIcon(data.weather[0].icon)
            setHumidity(data.main.humidity + '% humidity')
        } catch (error) {
            console.error("Failed to fetch weather data:", error);
            // Optionally reset states or set error messages here
        }
    };

    return (
        <section>
        <h1 className="text-5xl font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Get Weather Updates</h1>
            <InputArea getEndpoint={getEndpoint} />
            {location && temp !== null && (
                <WeatherCard location={location} temp={temp} det={det} weather={weatherIcon} humidity={humidity}/>
            )}
        </section>
    );
};

export default HeroSection;
