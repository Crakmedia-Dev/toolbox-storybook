import React from 'react'
import { mount, shallow } from 'enzyme'
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
  let closedDropdown
  const languages = [defaultLanguage, languageWithFlag]

  beforeEach(() => {
    component = shallow(
      <LanguageDropdown currentLanguageIndex={0} languages={languages} />
    )
    closedDropdown = component.find('ul')
  })

  it('should render one selected language', () => {
    const selectedItem = component.find('.selected LanguageItemContent')

    expect(selectedItem).toBeTruthy()
  })

  it.todo('should render list as being closed')

  describe('when clicked', () => {
    it.todo('should open list')
  })
})
