import React from 'react';
import './AmbulanceAnimation.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function AmbulanceScene() {
    return (
        <div className="ambulance-container">
            <DotLottieReact
                src="/animations/ambulance-animation.lottie"
                loop
                autoplay
                style={{ width: '500px', height: '400px' }} 
            />
        </div>
    );
}

export default AmbulanceScene;
