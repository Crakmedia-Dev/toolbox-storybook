import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: 'Demo-Button',
  component: Button,
  decorators: [withA11y]
};

/*
 * Basic button with text.
 */
export const WithText = () => <Button onClick={action('clicked')}>Hello Button</Button>;

/*
 * Augmented button with emoji.
 * Usage of `markdown` is highly recommended for documentation.
 */
export const WithEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
