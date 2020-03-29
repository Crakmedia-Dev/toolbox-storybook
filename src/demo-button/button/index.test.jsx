import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Index', () => {
  let component
  const onClickMock = jest.fn()
  const defaultChildren = <div className="bonjour" />
  const defaultButtonType = Button.defaultProps.type

  beforeEach(() => {
    component = shallow(
      <Button type={defaultButtonType} onClick={onClickMock}>{defaultChildren}</Button>
    )
  })

  describe('when clicked', () => {
    it('should call onClick once', () => {
      component.find('button').simulate('click')

      expect(onClickMock).toBeCalledTimes(1)
    })
  })

  it('should render children elements', () => {
    expect(component.containsMatchingElement(defaultChildren)).toBeTruthy()
  })

  it('should have button type "button" by default', () => {
    expect(component.prop('type')).toBe(defaultButtonType)
  })

  describe('when passed a type property value', () => {
    it('should set button tag to passed value', () => {
      const buttonTypeSubmit = 'submit'

      expect(component.prop('type')).toBe(buttonTypeSubmit)
    })
  })
})
