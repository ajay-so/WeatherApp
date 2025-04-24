import SearchBox from "./SearchBox.jsx";
import MapComponent from "./MapComponent.jsx";
import CardBox from "./CardBox";
import { useState } from "react";
import Earth from "./Earth.jsx";
import ReviewList from "./ReviewList.jsx";
import ReviewForm from "./ReviewForm.jsx";

export default function WeatherApp() {
    const [weather, setWeather] = useState({
        city: "Delhi",
        temp: 22.18,
        temp_max: 22.18,
        temp_min: 22.18,
        humidity: 22,
        feels_like: 21.03,
        weather: "clear sky",
        sunrise: 1739151220,
        sunset: 1739191031,
        coords: [77.2167, 28.6667],
    });

    const updateInfo = (newInfo) => {
        setWeather(newInfo);
    };

    return (
        <div style={{ backgroundColor: "#a3d7f7" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <SearchBox updateInfo={updateInfo} />
                    </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center">
                    <div className="col-md-4 mb-3">
                        <CardBox info={weather} />
                    </div>
                    <div className="col-md-8 mb-3">
                        <MapComponent coords={weather.coords} />
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-8 mb-3">
                        <ReviewForm />
                    </div>
                    <div className="col-12 col-md-4 mb-3">
                        <Earth />
                    </div>
                </div>
                <div className="row">
                    <ReviewList />
                </div>
            </div>
        </div>
    );
}
