import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('Button', () => {
  let component
  const onClickMock = jest.fn()
  const defaultChildren = 'text'

  beforeEach(() => {
    component = shallow(
      <Button onClick={onClickMock}>{defaultChildren}</Button>
    )
  })

  it('expects onClick function to be registered', () => {
    component.find('button').simulate('click')

    expect(onClickMock).toBeCalledTimes(1)
  })

  it('expects children to be "text"', () => {
    expect(component.prop('children')).toBe(defaultChildren)
  })

  it('expects children to be React Node', () => {
    const childrenAsReactNode = <span>{defaultChildren}</span>
    component.unmount()
    component = shallow(<Button>{childrenAsReactNode}</Button>)

    expect(component.prop('children')).toBe(childrenAsReactNode)
  })
})
