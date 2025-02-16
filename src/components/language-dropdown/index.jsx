import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import LanguageList from './styles'
import RoundFlag from './round-flag'

const LanguageItemContent = ({ code, fullName }) => {
  return (
    <>
      <RoundFlag code={code} />
      {fullName || code}
    </>
  )
}

LanguageItemContent.propTypes = {
  code: PropTypes.string.isRequired,
  fullName: PropTypes.string
}

const LanguageDropdown = ({ currentLanguageCode, languages }) => {
  const [isListVisible, setListVisible] = useState(false)
  const toggleLanguageList = () => {
    setListVisible(prevState => !prevState)
  }

  const languageChoices = useMemo(
    () =>
      Object.keys(languages).map(code => {
        const { path, fullName } = languages[code]
        return (
          <li
            className={`lang${code === currentLanguageCode ? ' selected' : ''}`}
            key={code}
          >
            {code === currentLanguageCode ? (
              <button
                className="lang-inner"
                type="button"
                onClick={toggleLanguageList}
              >
                <LanguageItemContent code={code} fullName={fullName} />
                <i className="arrow" />
              </button>
            ) : (
              <a
                className="lang-inner"
                href={`${path}`}
              >
                <LanguageItemContent code={code} fullName={fullName} />
              </a>
            )}
          </li>
        )
      }),
    [languages, currentLanguageCode]
  )

  return (
    <LanguageList
      isListVisible={isListVisible}
      itemCount={languageChoices.length}
      className="lang-dropdown"
    >
      {languageChoices}
    </LanguageList>
  )
}

LanguageDropdown.propTypes = {
  currentLanguageCode: PropTypes.string.isRequired,
  languages: PropTypes.objectOf(
    PropTypes.shape({
      fullName: PropTypes.string,
      path: PropTypes.string.isRequired
    })
  ).isRequired
}

export default LanguageDropdown
