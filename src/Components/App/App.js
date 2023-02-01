import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HoroscopeList from './HoroscopeList';
import DisplayHoroscope from './DisplayHoroscope';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HoroscopeList/>}/>
                <Route path="/:sign" element={<DisplayHoroscope/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;