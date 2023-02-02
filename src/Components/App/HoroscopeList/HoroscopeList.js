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
            <div className="wrapper">
                <img className="sign" src={images["aries"]} id="aries"/> 
                <p>aries</p>
            </div>
            <div className="wrapper">
                <img className="sign" src={images["taurus"]} id="taurus"/>
                <p>taurus</p>
            </div>
            <div className="wrapper">
                <img className="sign" src={images["gemini"]} id="gemini"/>
                <p>gemini</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["cancer"]} id="cancer"/>
                <p>cancer</p>   
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["leo"]} id="leo"/>
                <p>leo</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["virgo"]} id="virgo"/>
                <p>virgo</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["libra"]} id="libra"/>
                <p>libra</p>  
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["scorpio"]} id="scorpio"/>
                <p>scorpio</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["sagittarius"]} id="sagittarus"/>
                <p>sagittarius</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["capricorn"]} id="capricorn"/>
                <p>capricorn</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["aquarius"]} id="aquarius"/>
                <p>aquarius</p>
            </div>
            <div className='wrapper'>
                <img className="sign" src={images["pisces"]} id="pisces"/>
                <p>pisces</p>
            </div>
           
        </section>
    )
}

export default HoroscopeList;