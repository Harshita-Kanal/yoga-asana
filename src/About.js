import React from 'react'
import './About.css';
import meditate from './assets/yogasana.svg'
function About() {
    return (
        <div class="container">    
            <h1  class="mt-1 tp">About YogaAsana!</h1>
            <p>An AI Enabled Virtual Trainer</p>
            <img src = {meditate} className = "mt-1" width = "200px" alt = "" /> 
            <br/>
            <hr class="my-4" />
            <p>YogaAsana is a virtual instructor that can respond to the person's movements and provide this useful feedback missing in generic exercise videos. The other features of the portal would include a gamified platform where the profile analytics, and daily streak would be maintained.
There would also be a discussion forum where the users could form groups and share their progress.

</p>
           <br/>
           <br/>
        </div>
       

    )
}

export default About