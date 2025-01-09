// src/components/ImageGallery.js
import React from 'react';

const ImageGallery = () => {
    return (
        <div className="image-container">
            <img src="/images/home-cleaning1.jpg" alt="Home Cleaning" width="200" />
            <img src="/images/home-cleaning2.jpg" alt="Home Cleaning" width="200" />
            <img src="/images/home-cleaning3.jpg" alt="Home Cleaning" width="200" />
            <a href="/services" className="button">Explore Our Services</a>
        </div>
    );
};

export default ImageGallery;
