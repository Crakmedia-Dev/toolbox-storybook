import React from 'react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { object, withKnobs } from '@storybook/addon-knobs'
import LanguageDropdown from '../components'

export default {
  title: 'Language Dropdown',
  component: LanguageDropdown,
  decorators: [withA11y, withKnobs]
}

export const RoundedLanguageDropdown = () => (
  <LanguageDropdown
    onClick={action('clicked')}
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
