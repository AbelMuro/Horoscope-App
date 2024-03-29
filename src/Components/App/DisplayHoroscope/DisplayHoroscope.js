import React, {useEffect, useState} from 'react';
import {CircularProgress} from '@mui/material';
import {styled} from "@mui/system";
import {useLocation} from 'react-router-dom';
import Arrows from './Arrows';
import "./styles.css";
import images from '../images';


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
    const {state} = useLocation();

    const makeFetchRequest = async (signName, day) => {
        const url = `https://horoscopes-ai.p.rapidapi.com/get_horoscope_en/${signName}/${day}/general`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.api_key,
                'X-RapidAPI-Host': process.env.host,
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setHoroscope(result);
        } catch (error) {
            console.error(error);
        }
    }

  /* const setState = (day) => {
        setLoading(true);
        makeFetchRequest(state.signName, day) 
    } */

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
                <img src={images[state.signName]} className="horoscopeImage"/>
                {/* Arrows setState={setState}/>  */ }                 
                <div className="desc">
                    {loading ? <StyledLoadingTextIcon /> : horoscope.general[0]}
                </div>
            </section>    
        </>
    ) : (<StyledLoadingIcon />)
}

export default DisplayHoroscope;