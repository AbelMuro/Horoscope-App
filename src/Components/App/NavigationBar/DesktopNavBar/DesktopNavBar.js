import React from 'react';
import "./styles.css";

function DesktopNavBar({handleDialog, handleGoBack}) {

    return(
        <>
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
        </>
    )
}

export default DesktopNavBar;