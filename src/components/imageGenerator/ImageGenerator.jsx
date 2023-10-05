import React from 'react';
import './ImageGenerator.css';
import defaultImg from '../assets/img-default.jpg' 

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className="header">AI Image Generator</div>
        <div className="img-loading">
            <div className="img"><img src={defaultImg} alt="default-image" /></div>
        </div>
    </div>
  )
}

export default ImageGenerator