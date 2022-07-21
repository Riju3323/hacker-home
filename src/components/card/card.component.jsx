import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='hacker'
      src={`https://avatars.dicebear.com/api/adventurer/${props.hacker.id}.svg`}
    />
    <h2 className='usernameh'> {props.hacker.username} </h2>
    <h3 className='websiteh'>WebSite - {props.hacker.website}</h3>
    <p className='email'>Email - {props.hacker.email} </p>
  </div>
);