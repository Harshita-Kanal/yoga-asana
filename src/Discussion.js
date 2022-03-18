import React from 'react';
import './Discussion.css';

import Chat from './Chat';
import Sidebar from "./Sidebar"

function Discussion() {
    return (
        <div className = "app" > 
            <div className="app_body">
                <Sidebar />
                <Chat /> 
            </div>
        </div>
        
    )
}

export default Discussion