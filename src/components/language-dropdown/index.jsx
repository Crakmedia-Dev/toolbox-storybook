import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import LanguageList from './styles'
import * as flags from '../flags-round'

const LanguageItemContent = ({ code }) => {
  return (
    <>
      <img src={flags[code]} alt={code} />
      {code}
    </>
  )
}

LanguageItemContent.propTypes = {
  code: PropTypes.string
}

const LanguageDropdown = ({ currentLanguage, languages }) => {
  const [isListVisible, setListVisible] = useState(false)
  const toggleLanguageList = () => {
    setListVisible(prevState => !prevState)
  }

  const languageChoices = useMemo(
    () =>
      languages.map(({ code }) => {
        return (
          <li
            className={`lang${
              code === currentLanguage.code ? ' selected' : ''
            }`}
          >
            {code === currentLanguage.code ? (
              <button
                className="lang-inner"
                type="button"
                onClick={toggleLanguageList}
              >
                <LanguageItemContent code={code} />
                <i className="arrow" />
              </button>
            ) : (
              <a className="lang-inner" href={`/${code}`}>
                <LanguageItemContent code={code} />
              </a>
            )}
          </li>
        )
      }),
    [languages, currentLanguage]
  )

  return (
    <LanguageList
      isListVisible={isListVisible}
      itemCount={languageChoices.length}
    >
      {languageChoices}
    </LanguageList>
  )
}

LanguageDropdown.propTypes = {
  currentLanguage: PropTypes.shape({
    code: PropTypes.string,
    fullName: PropTypes.string
  }).isRequired,
  languages: PropTypes.shape([
    { code: PropTypes.string, fullName: PropTypes.string }
  ]).isRequired
}

LanguageDropdown.defaultTypes = {
  currentLanguage: { code: 'en' },
  languages: [{ code: 'en' }]
}

export default LanguageDropdown
