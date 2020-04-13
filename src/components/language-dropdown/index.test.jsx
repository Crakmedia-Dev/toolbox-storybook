import React from 'react'
import { shallow } from 'enzyme'
import LanguageDropdown from './index'

const defaultLanguage = {
  code: 'one step from eden',
  fullName: 'one step from eden',
  path: 'ein quoi'
}

const languageWithFlag = {
  code: 'en',
  fullName: 'jesuisundrapeauanglais',
  path: '/'
}

describe('LanguageDropdown', () => {
  let component
  const languages = [defaultLanguage, languageWithFlag]

  beforeEach(() => {
    component = shallow(
      <LanguageDropdown currentLanguageIndex={0} languages={languages} />
    )
  })

  it('should render one selected language', () => {
    const selectedItem = component.find('.selected LanguageItemContent')

    expect(selectedItem).toBeTruthy()
  })

  it('should render list as being closed', () => {
    const dropdownList = component.find('.selected').parent()

    expect(dropdownList.prop('isListVisible')).toBeFalsy()
  })

  describe('when clicked', () => {
    it('should open list', () => {
      component.find('button').simulate('click')
      const dropdownList = component.find('.selected').parent()

      expect(dropdownList.prop('isListVisible')).toBeTruthy()
    })
  })
})
