import React from 'react';
import './ImageGenerator.css';
import defaultImg from '../assets/img-default.jpg' 

const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <h1 className="header">AI Image  <span>Generator</span></h1>
        <div className="img-loading">
            <div className="img"><img src={defaultImg} alt="default-image" /></div>
        </div>
        <div className="search-box">
            <input type="text" className='search-input' placeholder='Description Here...'/>
            <div className="generate-btn">Generate </div>
        </div>
    </div>
  )
}

export default ImageGenerator