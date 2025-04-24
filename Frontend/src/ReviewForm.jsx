import "./Review.css";
import React, { useState } from "react";
import axios from "axios";

function ReviewForm() {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");

    const handleForm = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/weather/review", {
                name,
                rating,
                comment,
            });
            alert("Review submitted successfully!");
            setName("");
            setComment("");
            setRating(""); 
        } catch (error) {
            console.error("Review submit error:", error.response?.data || error.message);
        }
    };

    return (
        <div className="row">
            <div>
                <div
                    className="border border-info p-3"
                    style={{ borderRadius: "6px", backgroundColor: "white" }}
                >
                    <h4>Leave a Review</h4>
                    <form onSubmit={handleForm} noValidate className="needs-validation">
                        <div className="mt-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="review[name]"
                                placeholder="Enter your good name..."
                                className="form-control me-2 p-2"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                            />

                            <label className="form-label mt-3">Rating</label>
                            <fieldset className="starability-coinFlip">
                                <input
                                    type="radio"
                                    id="no-selection"
                                    name="review[rating]"
                                    value=""
                                    onChange={(e) => setRating(e.target.value)}
                                    checked={rating === ""}
                                    hidden
                                />

                                {[1, 2, 3, 4, 5].map((num) => (
                                    <React.Fragment key={num}>
                                        <input
                                            type="radio"
                                            id={`rate${num}`}
                                            name="review[rating]"
                                            value={num}
                                            onChange={(e) => setRating(e.target.value)}
                                            checked={rating === `${num}`}
                                        />
                                        <label
                                            htmlFor={`rate${num}`}
                                            title={`${num} star${num > 1 ? "s" : ""}`}
                                        >
                                            {num} star{num > 1 ? "s" : ""}
                                        </label>
                                    </React.Fragment>
                                ))}
                            </fieldset>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="comment" className="form-label">
                                Comments
                            </label>
                            <textarea
                                name="review[comment]"
                                id="comment"
                                rows="4"
                                className="form-control"
                                required
                                onChange={(e) => setComment(e.target.value)}
                                value={comment}
                            ></textarea>
                            <div className="invalid-feedback">Please add comments for review</div>
                        </div>

                        <button className="btn btn-outline-success" type="submit">
                           Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;
