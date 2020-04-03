import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { object, withKnobs } from '@storybook/addon-knobs'
import LanguageDropdown from './index'

export default {
  title: 'Language Dropdown',
  component: LanguageDropdown,
  decorators: [withA11y, withKnobs]
}

export const RoundedLanguageDropdown = () => (
  <LanguageDropdown
    currentLanguage={object(
      'currentLanguage',
      { code: 'en' },
      'currentLanguage'
    )}
    languages={object(
      'languages',
      [{ code: 'en' }, { code: 'fr' }],
      'languages'
    )}
  />
)

RoundedLanguageDropdown.story = {
  parameters: {
    jest: ['Language-dropdown/index.test.jsx']
  }
}
