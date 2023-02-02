import React from 'react';
import {useNavigate} from "react-router-dom";
import "./styles.css";

function NavigationBar() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }


    return(
        <nav className="navBar">
            <p className="horoscopeTitle">
                Horoscope app
            </p>
            <button className={"goBackButton"} onClick={handleClick}>
                Go Back
            </button>
        </nav>
    )
}

export default NavigationBar;