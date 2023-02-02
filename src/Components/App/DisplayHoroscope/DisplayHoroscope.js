import React, {useEffect, useState} from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {CircularProgress} from '@mui/material';
import {styled} from "@mui/system";
import {useLocation} from 'react-router-dom';
import "./styles.css";

const PositionedLeftArrow = styled(ArrowBackIosIcon)`
    color: white;
    font-size: 50px;
    display: block;
    margin: auto;
    
    &: hover{
        cursor: pointer;
        color: yellow;
    }
`
const PositionedRightArrow = styled(ArrowForwardIosIcon)`
    color: white;
    font-size: 50px;
    display: block;
    margin: auto;
    &: hover{
        cursor: pointer;
        color: yellow;
    }
`

const StyledLoadingIcon = styled(CircularProgress)`
    color: white;
    position: relative;
    top: 400px;
    left: 50%;
    transform: translate(-50%, -50%);
`

const StyledLoadingTextIcon = styled(CircularProgress)`
    color: white;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
`

function DisplayHoroscope() {
    const [horoscope, setHoroscope] = useState(null);
    const [loading, setLoading] = useState(false);
    const Api_Key = process.env.api_key;
    const {state} = useLocation();

    const makeFetchRequest = (signName, day) => {
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': Api_Key,
                'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
            }
        };
        
        fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signName}&day=${day}`, options)       
            .then(response => response.json())                                                              
            .then(results => setHoroscope(results))                                                        
            .catch(err => console.error(err));
    }

    const handleClick = (e) => {
    //note to my future self, what the following function does is select either <p> yesterday </p> or <p> tomorrow</p> from the DOM
    //and will change the innerHTML based on what the user has clicked on
        setLoading(true);
        const left = document.querySelector(".left");
        const right = document.querySelector(".right"); 
        let day = e.target.parentElement;       
        const tagName = day.tagName.toLowerCase();             

        if(tagName == "svg")                                    
            day = day.parentElement.lastElementChild.innerHTML;
        else 
            day = day.lastElementChild.innerHTML;
  
        if(day == "yesterday"){
            right.style.display = "";
            right.lastElementChild.innerHTML = "today"
            left.style.display = "none";
        }
        else if(day == "tomorrow"){
            left.style.display = "";
            left.lastElementChild.innerHTML = "today"
            right.style.display = "none";
        }
        else if(day == "today"){
            left.style.display = "";
            left.lastElementChild.innerHTML = "yesterday";
            right.style.display = "";
            right.lastElementChild.innerHTML = "tomorrow"
        }
        makeFetchRequest(state.signName, day) 
    }

    useEffect(() => {
        makeFetchRequest(state.signName, "today"); 
    }, [])

    useEffect(() => {
        if(loading)
            setLoading(false);
    }, [horoscope])


    return horoscope ? (
        <>
            <section className="horoscope">
                <h1 className="signName">
                    {state.signName}
                </h1>

                <img src={state.signImage} className="horoscopeImage"/>
                <div className="left">
                    <PositionedLeftArrow onClick={handleClick}/>
                    <p>
                        yesterday
                    </p>
                </div>
                <div className="right">
                    <PositionedRightArrow onClick={handleClick}/> 
                    <p>
                        tomorrow
                    </p>
                </div>
                <div className="desc">
                    {loading ? <StyledLoadingTextIcon /> : horoscope.description }
                </div>
            </section>    
        </>
    ) : (<StyledLoadingIcon />)
}

export default DisplayHoroscope;