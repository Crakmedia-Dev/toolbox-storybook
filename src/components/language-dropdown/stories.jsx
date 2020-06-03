import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { text, object, withKnobs } from '@storybook/addon-knobs'
import LanguageDropdown from './index'

export default {
  title: 'Language Dropdown',
  component: LanguageDropdown,
  decorators: [withA11y, withKnobs]
}

export const RoundedLanguageDropdown = () => (
  <LanguageDropdown
    currentLanguageCode={text(
      'currentLanguageCode',
      'en',
      'currentLanguageCode'
    )}
    languages={object(
      'languages',
      {
        en: { path: '/?path=/story/language-dropdown--rounded-language-dropdown#en' },
        fr: { path: '/?path=/story/language-dropdown--rounded-language-dropdown#fr' }
      },
      'languages'
    )}
  />
)

RoundedLanguageDropdown.story = {
  parameters: {
    jest: ['language-dropdown/index.test.jsx']
  }
}
