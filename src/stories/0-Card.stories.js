import React from 'react';
import { Card } from '../components/card/card.component';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'Card Component',
  decorators: [withKnobs]
};

export const toStorybook = () => {
  let containerWidth = number('ContainerWidth', 300);
  let monster = {
    name: text('Name', 'amgad'),
    email: text('Email', 'amgad@amgad.tv'),
    id: number('Id', 10)
  };
  return (
    <div style={{ width: `${containerWidth}px`}}>
      <Card monster={monster} />
    </div>
  );
};

toStorybook.story = {
  name: 'Simple Card'
};
