require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Review } = require("./model/review");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongo_url = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Environment variables
const api_url = process.env.API_URL;
const api_key = process.env.API_KEY;

// Weather API route
app.get("/weather", async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        const response = await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        if (data.cod !== 200) {
            return res.status(data.cod).json({ error: data.message });
        }
        res.json(data);
    } catch (error) {
        console.error("Weather fetch error:", error);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// Review POST route
app.post("/weather/review", async (req, res) => {
    const { rating, comment, name } = req.body;

    if (!rating || !comment || !name) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const review = new Review({ rating, comment, name });
        await review.save();
        res.status(201).json({ success: true, message: "Review submitted successfully!" });
    } catch (error) {
        console.error("Review save error:", error);
        res.status(500).json({ success: false, message: "Failed to submit review" });
    }
});

// Review GET route
app.get("/weather/review", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        console.error("Review fetch error:", error);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
