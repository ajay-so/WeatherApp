import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LikeButton from "./LikeButton.jsx";
import "./cardBox.css";


export default function cardBox({ info }) {
    const formatTime = (timestamp) => {
        let date = new Date(timestamp * 1000);
        return date.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    let img_url = "";

    if (info.temp < 15) {
        img_url = "https://img.freepik.com/free-vector/girl-character-having-cold_23-2148477007.jpg?uid=R185080085&ga=GA1.1.2096381491.1726028399&semt=ais_hybrid&w=740"; // Cold
    } else if (info.temp >= 15 && info.temp <= 30) {
        img_url = "https://img.freepik.com/free-photo/full-shot-woman-posing-sunset_23-2150343144.jpg?uid=R185080085&ga=GA1.1.2096381491.1726028399&semt=ais_hybrid&w=740"; // Pleasant
    } else {
        img_url = "https://img.freepik.com/free-photo/illustration-tourist-attraction-city_23-2151852309.jpg?uid=R185080085&ga=GA1.1.2096381491.1726028399&semt=ais_hybrid&w=740"; // Hot
    }

    return (
        <div style={{ height: "400px" }}>
            <Card className='border border-info'>
                <CardMedia
                    sx={{ height: 158 }}
                    image={img_url}
                    title="weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="span">
                        {info.city}
                    </Typography>
                    <Typography
                        className='mb-2'
                        variant="body2"
                        component="div" 
                        sx={{ color: 'text.secondary' }}
                    >
                        <div>Temperature : {info.temp}&deg;C</div>
                        <div>Humidity : {info.humidity}</div>
                        <div>Weather : {info.weather}</div>
                        <div>Sunrise : {formatTime(info.sunrise)}</div>
                        <div>Sunset : {formatTime(info.sunset)}</div>
                        <div>Feels_like : {info.feels_like}&deg;C</div>
                    </Typography>

                    <LikeButton />
                </CardContent>
            </Card>
        </div>
    );
}
