import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HoroscopeList from './HoroscopeList';
import DisplayHoroscope from './DisplayHoroscope';
import NavigationBar from './NavigationBar';
import "./styles.css";

function App() {
    return(
        <BrowserRouter>
            <NavigationBar/>        
            <Routes>
                <Route path="/" element={<HoroscopeList/>}/>
                <Route path="/:sign" element={<DisplayHoroscope/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;