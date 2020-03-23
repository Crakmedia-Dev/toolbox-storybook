import React from 'react'
import { shallow } from 'enzyme'
import Button from './button'

describe('Button Component', () => {
  let component
  const onClickMock = jest.fn()
  const defaultChildren = 'text'
  const defaultButtonType = 'button'

  beforeEach(() => {
    component = shallow(
      <Button type={defaultButtonType} onClick={onClickMock}>{defaultChildren}</Button>
    )
  })

  it('should register onClick function', () => {
    component.find('button').simulate('click')

    expect(onClickMock).toBeCalledTimes(1)
  })

  it('should set children to be "text"', () => {
    expect(component.prop('children')).toBe(defaultChildren)
  })

  it('should set children to be React Node', () => {
    const childrenAsReactNode = <span>{defaultChildren}</span>
    component.unmount()
    component = shallow(<Button>{childrenAsReactNode}</Button>)

    expect(component.prop('children')).toBe(childrenAsReactNode)
  })

  it('should have button type "button" by default', () => {
    expect(component.prop('type')).toBe(defaultButtonType)
  })

  it('should have button type passed in props', () => {
    const buttonTypeSubmit = 'submit'
    component.unmount()
    component = shallow(<Button type={buttonTypeSubmit} />)

    expect(component.prop('type')).toBe(buttonTypeSubmit)
  })
})
