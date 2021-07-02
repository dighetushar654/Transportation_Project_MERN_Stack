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
              src='images/truck1.jpg'
              text='Full Load Services'
              label='TRUCKS'
              path='/services'
            />
            <CardItem
              src='images/pick.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='PICK_UP'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/minitrucks.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='MINI'
              path='/services'
            />
            <CardItem
              src='images/private.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='PRIVATE'
              path='/products'
            />
            <CardItem
              src='images/tractor.jpg'
              text='The backbone of the farm'
              label='TRACTORS'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
