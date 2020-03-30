import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Button', () => {
  let component
  const onClickMock = jest.fn()
  const defaultChildren = <div className="bonjour" />
  const defaultButtonType = Button.defaultProps.type

  beforeEach(() => {
    component = shallow(
      <Button type={defaultButtonType} onClick={onClickMock}>{defaultChildren}</Button>
    )
  })

  it('should render children elements', () => {
    expect(component.containsMatchingElement(defaultChildren)).toBeTruthy()
  })

  describe('when clicked', () => {
    it('should call onClick once', () => {
      component.find('button').simulate('click')

      expect(onClickMock).toBeCalledTimes(1)
    })
  })

  describe('when passed no type property value', () => {
    it('should set button type to default', () => {
      expect(component.find(`button[type="${defaultButtonType}"]`)).toHaveLength(1)
    })
  })

  describe('when passed a type property value', () => {
    it('should set button type to passed value', () => {
      const buttonTypeSubmit = 'submit'

      component.setProps({ type: buttonTypeSubmit })

      expect(component.find(`button[type="${buttonTypeSubmit}"]`)).toHaveLength(1)
    })
  })
})
