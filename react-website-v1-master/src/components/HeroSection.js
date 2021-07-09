import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button1 } from './Button1';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/my4.mp4' autoPlay loop muted />
      <h1>WelcomE To TransportatioN</h1>
      <p>We are happy to help you</p>
      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          FOR VEHICLES
        </Button1>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          FOR USER
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
