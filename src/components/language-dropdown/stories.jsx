import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { number, object, withKnobs } from '@storybook/addon-knobs'
import LanguageDropdown from './index'

export default {
  title: 'Language Dropdown',
  component: LanguageDropdown,
  decorators: [withA11y, withKnobs]
}

export const RoundedLanguageDropdown = () => (
  <LanguageDropdown
    currentLanguageIndex={number(
      'currentLanguageIndex',
      0,
      'currentLanguageIndex'
    )}
    languages={object(
      'languages',
      [
        { code: 'en', path: '/' },
        { code: 'fr', path: '/' }
      ],
      'languages'
    )}
  />
)

RoundedLanguageDropdown.story = {
  parameters: {
    jest: ['Language-dropdown/index.test.jsx']
  }
}
