import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HoroscopeList from './HoroscopeList';
import DisplayHoroscope from './DisplayHoroscope';
import NavigationBar from './NavigationBar';
import Store from './../Store';
import {Provider} from 'react-redux';
import "./styles.css";

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <NavigationBar/>        
                <Routes>
                    <Route path="/" element={<HoroscopeList/>}/>
                    <Route path="/:sign" element={<DisplayHoroscope/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>

    )
}

export default App;