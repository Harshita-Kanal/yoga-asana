import React, { Component } from 'react';
import './CoverPage.css';
import './Practise.css';
import { useState } from "react"
import meditate from './assets/yoga.svg'
// import Welcome from './Welcome';
import PoseNet from "react-posenet"


function Practise() {
    const [posesString, setPosesString] = useState([])
    const [posesNose, setPosesNose] = useState([])
    const [posesLeftEye, setPosesLeftEye] = useState([])
    const [posesRightEye, setPosesRightEye] = useState([])
    const [posesScore, setPosesScore] = useState([])
  return (
    <div className="container">
        <h1 className = "top">Let our model detect your yoga poses 😃 </h1>
        <br/>
        <div className = "posenet">
        <PoseNet
    inferenceConfig={{ decodingMethod: "single-person" }}
    onEstimate={poses => {
      setPosesString(JSON.stringify(poses))
      setPosesScore(JSON.stringify(poses[0].score))
      if(poses[0] !== undefined && poses[0].keypoints[0] !== undefined)
      setPosesNose(JSON.stringify(poses[0].keypoints[0].score)) 
      if(poses[0] !== undefined && poses[0].keypoints[1] !== undefined)
      setPosesLeftEye(JSON.stringify(poses[0].keypoints[1].score))
      if(poses[0] !== undefined && poses[0].keypoints[2] !== undefined)
      setPosesRightEye(JSON.stringify(poses[0].keypoints[2].score))
     
    }}
  />
  <br/>
  <br/>
  <div className = "res">
  <br/>
  <h5 className = "color">Identified Keypoint Scores</h5>
  <br/>
  <p>Eye Positions: {parseFloat(posesNose).toFixed(4)}</p>
  <p className = "color">Left Shoulder: {parseFloat(posesLeftEye).toFixed(4)}</p>
  <p>Right Shoulder: {parseFloat(posesRightEye).toFixed(4)}</p>
   <p className = "color-res">Known Posture score: {parseFloat(posesScore).toFixed(4)}</p>
    </div>
    </div>
    </div>
  );
}


export default Practise;