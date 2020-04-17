import React, { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import LanguageList from './styles'
import * as flags from './flags-round'

const LanguageItemContent = ({ code, fullName }) => {
  return (
    <>
      <img src={flags[code]} alt={code} />
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
                href={`/${code}${path.startsWith('/') ? path : `/${path}`}`}
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
