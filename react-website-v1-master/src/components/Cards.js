import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>VEHICLES FOR YOU</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/hyd.jpg'
              text='Full Load Services'
              label='HYDRAULIC TRUCKS'
              path='/services'
            />
            <CardItem
              src='images/ape.jpg'
              text='Low load and 3 wheels'
              label='APE MINI'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tempo.jpg'
              text='Medium load'
              label='TEMPO'
              path='/services'
            />
            <CardItem
              src='images/tractor.jpg'
              text='For all farming servicess'
              label='TRACTOR'
              path='/products'
            />
            <CardItem
              src='images/mini.jpg'
              text='Medium load carring capacity'
              label='PICK UP'
              path='/sign-up'
            />
              <CardItem
              src='images/iceare.jpg'
              text='Full load without hydraulic '
              label='EICHER'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
