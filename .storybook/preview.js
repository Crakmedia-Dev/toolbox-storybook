import { addDecorator } from '@storybook/react'
import { withTests } from '@storybook/addon-jest'

import results from '../src/test-results.json'

addDecorator(
  withTests({
    results,
  })
)
