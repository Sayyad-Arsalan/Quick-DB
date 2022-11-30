import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <>
    <div className="Container">
    <img src="Loginpage/Images/png/logo-no-background.png" className='logo1'></img>     
    </div>

    <div className='Container'>
        <button type="button" class="btn btn-outline-primary" id='btn1'>Login</button>
        <button type="button" class="btn btn-outline-primary" id='btn2'>Register</button>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        
    </div>
    </>,
    document.getElementById('root')
)
