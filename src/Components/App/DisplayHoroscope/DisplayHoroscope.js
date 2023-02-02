import React, {useEffect, useState} from 'react';
import {CircularProgress} from '@mui/material';
import {styled} from "@mui/system";
import {useLocation} from 'react-router-dom';
import Arrows from './Arrows';
import "./styles.css";


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

    const setState = (day) => {
        setLoading(true);
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
                <Arrows setState={setState}/>                    
                <div className="desc">
                    {loading ? <StyledLoadingTextIcon /> : horoscope.description }
                </div>
            </section>    
        </>
    ) : (<StyledLoadingIcon />)
}

export default DisplayHoroscope;