import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.hackers.map(hacker => (
      <Card key={hacker.id} hacker={hacker} />
    ))}
  </div>
);