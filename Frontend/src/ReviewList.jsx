import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch reviews from backend
  const fetchReviews = async () => {
    try {
      const response = await axios.get("https://weatherapp-poaq.onrender.com/weather/review");
      setReviews(response.data);
    } catch (error) { 
      console.error("Error fetching reviews:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div>
      <div className="border border-info"
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <h4 className="mb-3">All Reviews</h4>

        <div className="row">
          {displayedReviews.length > 0 ? (
            displayedReviews.map((review, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mt-3">
                <div className="card" style={{ backgroundColor: "#e0ecff" }}>
                  <div className="p-3">
                    <p className="card-text mb-1">
                      <strong>Created by:</strong> {review.name}
                    </p>
                    <hr className="my-2" />
                    <p className="card-text mb-1">⭐ Rating: {review.rating}</p>
                    <p className="card-text">📝 {review.comment}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </div>

        {reviews.length > 3 && (
          <div className="text-end mt-3">
            <a
              href=""
              className="text-info text-decoration-none"
              onClick={(e) => {
                e.preventDefault();
                setShowAll(!showAll);
              }}
              style={{ cursor: "pointer" }}
            >
              {showAll ? "See Less" : "See More"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
