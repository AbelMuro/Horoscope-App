import React from 'react';
import {useNavigate} from 'react-router-dom';

function HoroscopeList() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if(!e.target || !e.target.matches(".sign")) return;

        const sign = e.target.id;
        navigate(`/${sign}`, {state: {sign : sign}});
    }

    return(
        <section className="horoscopeList" onClick={handleClick}>
            <img className="sign" id="aries"/>
            <img className="sign" id="taurus"/>
            <img className="sign" id="gemini"/>
            <img className="sign" id="cancer"/>            
            <img className="sign" id="leo"/>
            <img className="sign" id="virgo"/>
            <img className="sign" id="libra"/>            
            <img className="sign" id="scorpio"/>
            <img className="sign" id="sagittarus"/>
            <img className="sign" id="capricorn"/>
            <img className="sign" id="aquarius"/>
            <img className="sign" id="pisces"/>
        </section>
    )
}

export default HoroscopeList;