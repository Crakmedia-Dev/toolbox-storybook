import React from 'react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { text, withKnobs } from '@storybook/addon-knobs'
import { withTests } from '@storybook/addon-jest'
import Button from '../components/button'
import results from '../../.jest/test-results.json'

export default {
  title: 'Demo-Button',
  component: Button,
  decorators: [withA11y, withKnobs, withTests({ results })]
}

export const WithText = () => (
  <Button onClick={action('clicked')}>
    {text('children', 'Hello world!')}
  </Button>
)

WithText.story = {
  parameters: {
    jest: ['button.test.jsx']
  }
}

export const WithEmoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      {text('children', '😀 😎 👍 💯')}
    </span>
  </Button>
)

// Removes doc page for this story
WithEmoji.story = {
  parameters: {
    docs: { page: null },
    jest: ['button.test.jsx']
  }
}
