import React, {useState, useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import DialogBox from './DialogBox';
import "./styles.css";

function NavigationBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);


    const handleGoBack = () => {
        navigate("/");
    }

    const handleDialog = useCallback(() => {
        setOpen((prevState) => {
            return !prevState;
        });
    }, [])

    return(
        <nav className="navBar">
            <p className="horoscopeTitle">
                Daily Horoscope app
            </p>
            <div className="buttons">
                <button className="whatsMySign" onClick={handleDialog}>
                    What's my sign?
                </button>
                <button className="goBackButton" onClick={handleGoBack}>
                    Go Back
                </button>                
            </div>
            <DialogBox open={open} handleDialog={handleDialog}/>
        </nav>
    )
}

export default NavigationBar;