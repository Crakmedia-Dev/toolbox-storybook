import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';

export default {
  title: 'Demo-Button',
  component: Button,
};

// Story : Basic button with text
export const WithText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// Story : Augmented button with emoji
export const WithEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
