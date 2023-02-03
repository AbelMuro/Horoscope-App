import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from '@mui/material';
import {styled} from '@mui/system';
import "./styles.css";


const StyledMenu = styled(MenuIcon)`
    align-self: center;
    cursor: pointer;

    &: hover{
        color: white;
    }
`

const StyledIconButton = styled(IconButton)`
    color: black;
    align-self: flex-end;
`

const StyledCloseIcon = styled(CloseIcon)`
    font-size: 40px;
`

function MobileNavBar({handleGoBack, handleDialog }) {

    const handleOpen = () => {
        const sideMenu = document.querySelector(".sideMenu");
        sideMenu.style.left = "0px";
    }

    const handleClose = () => {
        const sideMenu = document.querySelector(".sideMenu");
        sideMenu.style.left = "";
    }

    //some of the css classes here have already been defined in the DesktopNavBar component
    return(
        <>
            <IconButton onClick={handleOpen} sx={{color: "black"}}>
               <StyledMenu fontSize="large"/> 
            </IconButton>
            <section className="sideMenu">
                <StyledIconButton onClick={handleClose}>
                    <StyledCloseIcon />
                </StyledIconButton>
                <div className="sideMenuContent">
                    <p className="horoscopeTitle">
                        Daily Horoscope app
                    </p>
                    <button className="whatsMySignMobile" onClick={() => {handleDialog(); handleClose()}}>
                        What's my sign?
                    </button>
                    <button className="goBackButtonMobile" onClick={() => {handleGoBack(); handleClose()}}>
                        Go Back
                    </button>                         
                </div>
            </section>
            
        </>
    )
}

export default MobileNavBar;