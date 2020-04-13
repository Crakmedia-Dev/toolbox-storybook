import React from 'react'
import { shallow } from 'enzyme'
import LanguageDropdown from './index'

const defaultLanguage = {
  'bonjour madame': {
    fullName: 'one step from eden',
    path: 'ein quoi'
  }
}

const languageWithFlag = {
  en: {
    fullName: 'jesuisundrapeauanglais',
    path: '/'
  }
}
describe('LanguageDropdown', () => {
  let component
  const languages = { ...defaultLanguage, ...languageWithFlag }

  beforeEach(() => {
    component = shallow(
      <LanguageDropdown currentLanguageCode="en" languages={languages} />
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
