import React from 'react';
import images from './images';
import {useNavigate} from 'react-router-dom';
import "./styles.css"

function HoroscopeList() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if(!e.target || !e.target.matches(".sign")) return;

        const signName = e.target.id;
        const signImage = e.target.src;
        navigate(`/${signName}`, {state: {signName : signName, signImage: signImage}});
    }

    return(
        <section className="horoscopeList" onClick={handleClick}>
            <h1 className="title">
                Select your sign
            </h1>
            <img className="sign" src={images["aries"]} id="aries"/>
            <img className="sign" src={images["taurus"]} id="taurus"/>
            <img className="sign" src={images["gemini"]} id="gemini"/>
            <img className="sign" src={images["cancer"]} id="cancer"/>            
            <img className="sign" src={images["leo"]} id="leo"/>
            <img className="sign" src={images["virgo"]} id="virgo"/>
            <img className="sign" src={images["libra"]} id="libra"/>            
            <img className="sign" src={images["scorpio"]} id="scorpio"/>
            <img className="sign" src={images["sagittarius"]} id="sagittarus"/>
            <img className="sign" src={images["capricorn"]} id="capricorn"/>
            <img className="sign" src={images["aquarius"]} id="aquarius"/>
            <img className="sign" src={images["pisces"]} id="pisces"/>
        </section>
    )
}

export default HoroscopeList;