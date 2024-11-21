import { useState } from "react"
import './subscribeButton.css'

const SubscribeButton = () => {
    const [subscribed, setSubscribed] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSubscribe = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setSubscribed(true);
        }, 3000);
    };

    return (
        <div className="container">
            <h1>Subscribe Button</h1>
            <button
                onClick={handleSubscribe}
                disabled={isAnimating || subscribed}
                className={`subscribe-btn ${isAnimating ? "gradient" : ""} ${subscribed ? "subscribed" : ""}`}
            >
                {
                    subscribed ? "Subscribed" : "Subscribe"
                }
            </button>
        </div>
    )
}

export default SubscribeButton
