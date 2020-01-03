import React from 'react';
import { CardList } from '../components/card-list/card-list.component';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Card List Component',
  decorators: [withKnobs]
};

export const toStorybook = () => {
  let containerWidth = number('ContainerWidth', 300);
  let monstersList = [];
  return (
    <div style={{ width: `${containerWidth}px`}}>
      <CardList monsters={monstersList} />
    </div>
  );
};

toStorybook.story = {
  name: 'Simple Empty Card List'
};
