import React from 'react'
import { shallow } from 'enzyme'
import Index from './index'

describe('Index', () => {
  let component
  const onClickMock = jest.fn()
  const defaultChildren = <div className="bonjour" />
  const defaultButtonType = Index.defaultProps.type

  beforeEach(() => {
    component = shallow(
      <Index type={defaultButtonType} onClick={onClickMock}>{defaultChildren}</Index>
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
