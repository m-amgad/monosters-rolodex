import React from 'react';
import { SearchBox } from '../components/search-box/search-box.component';
import { withKnobs, text, number } from '@storybook/addon-knobs';

export default {
  title: 'SearchBox Component',
  decorators: [withKnobs]
};

export const toStorybook = () => {
  let containerWidth = number('ContainerWidth', 300);
  let placeholder = text('Placeholder', 'what happen if the placeholder is too long');
  const handleChange = console.log;
  return (
    <div style={{ width: `${containerWidth}px` }}>
      <SearchBox placeholder={placeholder} handleChange={handleChange} />
    </div>
  );
};

toStorybook.story = {
  name: 'Simple SearchBox'
};
