import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='hacker'
      src={`https://robohash.org/${props.hacker.id}?set=set2&size=180x180`}
    />
    <h2> {props.hacker.name} </h2>
    <p> {props.hacker.email} </p>
  </div>
);