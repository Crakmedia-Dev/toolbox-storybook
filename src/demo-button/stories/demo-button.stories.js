import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';
import { withA11y } from "@storybook/addon-a11y";
import {text, withKnobs} from "@storybook/addon-knobs";

export default {
  title: 'Demo-Button',
  component: Button,
  decorators: [withA11y, withKnobs],
  parameters: {
    jest: ['button.test.js']
  }
};

export const WithText = () => (
  <Button onClick={action('clicked')}>{text("children", "Hello world!")}</Button>
);

export const WithEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      {text("children", "😀 😎 👍 💯")}
    </span>
  </Button>
);

// Removes doc page for this story
WithEmoji.story = {
  parameters: {
    docs: {
      page: null
    },
  }
};
