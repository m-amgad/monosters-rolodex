import React from 'react';
import { CardList } from '../components/card-list/card-list.component';
import { withKnobs, number, object } from '@storybook/addon-knobs';

export default {
  title: 'Card List Component',
  decorators: [withKnobs]
};

export const toStorybook = () => {
  let containerWidth = number('ContainerWidth', 300);
  let monstersList = []
  return (
    <div style={{ width: `${containerWidth}px` }}>
      <CardList monsters={monstersList} />
    </div>
  );
};

toStorybook.story = {
  name: 'empty card list'
};


export const toStorybook2 = () => {
  let containerWidth = number('ContainerWidth', 300);
  let monstersList = object('Monsters Array', [
    { name: 'nile', id: 200, email: 'nile@nile.nile' },
    { name: 'nile2', id: 100, email: 'nile2@nile.nile' }
  ]);


  return (
    <div style={{ width: `${containerWidth}px` }}>
      <CardList monsters={monstersList} />
    </div>
  );
};

toStorybook2.story = {
  name: 'multiple cards'
};
