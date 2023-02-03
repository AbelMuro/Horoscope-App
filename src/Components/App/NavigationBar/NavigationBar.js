import React, {useState, useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import DialogBox from './DialogBox';
import {useMediaQuery} from '@mui/material';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import "./styles.css";

function NavigationBar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const mobile = useMediaQuery("(max-width: 500px)");


    const handleGoBack = useCallback(() => {
        navigate("/");
    }, []);

    const handleDialog = useCallback(() => {
        setOpen((prevState) => {
            return !prevState;
        });
    }, [])

    return(
        <nav className="navBar">
            {mobile ? <MobileNavBar handleGoBack={handleGoBack} handleDialog={handleDialog}/> : 
                <DesktopNavBar handleGoBack={handleGoBack} handleDialog={handleDialog}/>}
            
            <DialogBox open={open} handleDialog={handleDialog}/>
        </nav>
    )
}

export default NavigationBar;