import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { number, object, text, withKnobs } from '@storybook/addon-knobs'
import LazyPicture from './index'

export default {
  title: 'Picture',
  component: LazyPicture,
  decorators: [withA11y, withKnobs]
}

export const Picture = () => {
  const alt = text('alt', 'A pretty picture', 'alt')
  const className = text('className', 'picture-story', 'className')
  const loadAnimationDelay = number(
    'loadAnimationDelay',
    0.7,
    {},
    'loadAnimationDelay'
  )
  const defaultIndex = number('defaultIndex', 0, {}, 'defaultIndex')
  const sources = object(
    'sources',
    [
      {
        url:
          'data:image/webp;base64,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',
        type: 'image/webp'
      },
      {
        url:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAACQBAMAAAChYgmEAAAAGFBMVEX///8AAACrmHBpNgh/ICBVZmf/AAB/ma4uozpiAAABWElEQVRo3u2a4W3DIBSEs0JX6Aqs0BW8Ait4/SJOuRKwDW0jRcr77oeFYrgvP05+POzbDSGEEEIIvU4fj4IB41mMck0pwYCxoq+7YMB4LsPX0TdVydcDK90FA8ZidovFZ1UZ5JzLL7lKpMNkw4DRZXdU8SoAOaZGYmuO/oGmwYCxyLBjJ88RY159YcRjTLduNvIjsvWdF1oYIRnO7tk2bts2J7ULNwwY13u4M0axEEOwfd9tCgPGSs95yNiq5LVXuaxqsFRoYURlXGdXAXVx1d7Omf5FzwkjDGPlyHV6t21NYcDoyu2ZkdaPRxvtxs489Q8wgjOmb4m0Pufsq4y604327KwPPYyojOv4KqnKbhfZ9uBVc8Y0wwjLuA7xWEHbmNraz0rd/VkFIyRjWmu1ps3rIaNtRx9eIMGIx5jKD0F7eewd2x87DxiBGf4Kp/0W51+NLIx3ZnwDDqahFf3RnHIAAAAASUVORK5CYII=',
        type: 'image/png'
      }
    ],
    'sources'
  )
  const props = { sources, loadAnimationDelay, alt, className, defaultIndex }

  return <LazyPicture {...props} />
}

Picture.story = {
  parameters: {
    jest: ['Picture/index.test.jsx']
  }
}
