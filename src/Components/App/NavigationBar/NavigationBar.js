import React, {useState, useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import DialogBox from './DialogBox';
import MenuIcon from '@mui/icons-material/Menu';
import {useMediaQuery} from '@mui/material';
import "./styles.css";

function NavigationBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const mobile = useMediaQuery("(max-width: 500px)")


    const handleGoBack = () => {
        navigate("/");
    }

    const handleDialog = useCallback(() => {
        setOpen((prevState) => {
            return !prevState;
        });
    }, [])

    //this is where i left off, i need to make two components, one for the mobile version of the navBar
    //and the other for the desktop version
    return(
        <nav className="navBar">
            <MenuIcon fontSize="large" sx={{display : mobile ? "block": "none", alignSelf: "center"}}/>
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