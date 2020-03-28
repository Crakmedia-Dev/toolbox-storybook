import React from 'react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { text, withKnobs } from '@storybook/addon-knobs'
import Index from './index'

export default {
  title: 'Demo-Index',
  component: Index,
  decorators: [withA11y, withKnobs]
}

export const WithText = () => (
  <Index onClick={action('clicked')}>
    {text('children', 'Hello world!')}
  </Index>
)

export const WithEmoji = () => (
  <Index onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      {text('children', '😀 😎 👍 💯')}
    </span>
  </Index>
)

// Removes doc page for this story
WithEmoji.story = {
  parameters: { docs: { page: null } }
}
