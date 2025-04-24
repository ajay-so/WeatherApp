import { useState } from "react";

export default function LikeButton() {
    const [like, setLike] = useState(false);

    function clickHandle() {
        setLike(!like);
    }
    const styles = { color: "red" }
    return (
            <div>
                <p onClick={clickHandle} style={{ cursor: "pointer" }}>
                    {like ? <i style={styles} className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                </p>
            </div>
    );
}
