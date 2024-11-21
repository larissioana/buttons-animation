import { useState } from "react";
import lightModeIcon from '../../assets/lightMode.png'
import darkModeIcon from '../../assets/darkMode.png'
import './toggleLightMode.css'

const ToggleLightDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        document.body.classList.toggle("dark-theme", !isDarkMode);
        document.body.classList.toggle("light-theme", isDarkMode);
    };

    return (
        <div className="button-container">
            <h1>Light/Dark Toggle Button</h1>
            <div className="toggle-switch" style={{
                border: isDarkMode ? "1px solid white" : "1px solid black",
                background: isDarkMode ? "linear-gradient(to left, #eb8508, #b48505, #966f12)" : "linear-gradient(to right, #aaafe9, #6161f1, #7b80cb)"
            }}>
                <div className="image-container">
                    <img src={lightModeIcon} alt="" />
                    <img src={darkModeIcon

                    } alt="" />
                </div>
                <div
                    className="ball"
                    onClick={toggleTheme}
                    style={
                        isDarkMode
                            ? { left: 0, background: "#181818" }
                            : { right: 0, background: "#ecebeb" }
                    }
                >
                </div>
            </div>
        </div>
    )
}

export default ToggleLightDarkMode
