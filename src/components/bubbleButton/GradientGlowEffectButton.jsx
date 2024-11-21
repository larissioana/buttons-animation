import './gradientGlowEffectButton.css'

const GradientGlowEffectButton = () => {
    return (
        <div className="container">
            <h1>Gradient Glow Effect Button</h1>
            <div className="glow-effect-button-container">
                <button className="glow-effect-button">
                    Click Me
                </button>
                <div className="glow"></div>
            </div>
        </div>
    )
}

export default GradientGlowEffectButton
