// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ImageGallery />
            <Footer />
        </div>
    );
};

export default App;
