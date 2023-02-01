import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import "./styles.css";

function DisplayHoroscope() {
    const [horoscope, setHoroscope] = useState(null)
    const Api_Key = process.env.api_key;
    const {state} = useLocation();

    useEffect(() => {
        const options = {
            method: 'POST',
            headers: {
                'X-RapidAPI-Key': Api_Key,
                'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
            }
        };
        
        fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${state.signName}&day=today`, options)        //remember to write in your notes
            .then(response => response.json())                                                              // about the parameters that must
            .then(results => setHoroscope(results))                                                         // be included in some api calls 
            .catch(err => console.error(err));
    }, [])


    return horoscope ? (
        <section className="horoscope">
                <></>
        </section>
    ) : (<></>)

}

export default DisplayHoroscope;