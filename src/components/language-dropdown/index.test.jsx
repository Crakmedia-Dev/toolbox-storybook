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

  it('should initially render the list non-visible', () => {
    const dropdownList = component.find('.lang-dropdown')

    expect(dropdownList.prop('isListVisible')).toEqual(false)
  })

  describe('when clicked', () => {
    it('should set list visible', () => {
      component.find('button').simulate('click')
      const dropdownList = component.find('.lang-dropdown')

      expect(dropdownList.prop('isListVisible')).toBe(true)
    })
  })
})
