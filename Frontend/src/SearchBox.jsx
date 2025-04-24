import { useState } from "react";
import axios from "axios";
import "./searchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeather = async () => {
        try {
            let response = await axios.get(`http://localhost:3000/weather?city=${city}`);
            let jsonResponse = response.data;
            let Info = {
                city,
                temp: jsonResponse.main.temp,
                temp_max: jsonResponse.main.temp_max,
                temp_min: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                sunrise: jsonResponse.sys.sunrise,
                sunset: jsonResponse.sys.sunset,
                coords: [jsonResponse.coord.lon, jsonResponse.coord.lat],
            };
            return Info;
        } catch (error) {
            throw error;
        }
    }

    let handleChange = function (event) {
        setCity(event.target.value);
    }

    let handleForm = async function (event) {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await getWeather();
            updateInfo(newInfo);
            setError(false);
        } catch (err) {
            setError(true);
        }
    }

    return (
        <div className="row">
            <div className="searchBox col-md-8 offset-md-2">
                <form onSubmit={handleForm} className="d-flex mt-3">
                    <input className="form-control me-2 p-2 shadow-sm" type="search" name="city" placeholder="Enter the city or country name..." aria-label="Search" value={city} onChange={handleChange} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {error && <p style={{ color: "red", marginTop: "5px" }}>You are entere`d a wrong City..</p>}
            </div>
            <hr className="mt-4"/>
        </div>
    );
}