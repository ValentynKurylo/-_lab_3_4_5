import logo from './logo.svg';
import './App.css';
import MainPage from "./components/mainPge/MainPage";
import {BrowserRouter} from "react-router-dom";
import React from "react";


function App() {
    return (
        <div>
            <BrowserRouter>
                <MainPage/>

        </BrowserRouter>
        </div>
    );
}

export default App;
