import React, { Component } from 'react';
import './CoverPage.css';
import meditate from './assets/yoga.svg'
class CoverPage extends Component {
    render() {
        return (
            <div className = "container">
                <h1 className= "top mt-1">What do you want to do today?</h1>
                <div className = "imddiv">
                <img src = {meditate} className = "mt-3" width = "400px" alt = "" /> 
                <br/>
                <button className = "pink ripple mt-5"><a className = "work" href = "/practise">Practise yoga</a></button>
                </div>
                <br/>
              
            </div>
        )
    }
}


export default CoverPage;