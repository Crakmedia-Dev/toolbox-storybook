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

const LanguageDropdown = ({ currentLanguageIndex, languages }) => {
  const [isListVisible, setListVisible] = useState(false)
  const toggleLanguageList = () => {
    setListVisible(prevState => !prevState)
  }

  const languageChoices = useMemo(
    () =>
      languages.map(({ code, path, fullName }, index) => {
        return (
          <li
            className={`lang${
              index === currentLanguageIndex ? ' selected' : ''
            }`}
            key={code}
          >
            {index === currentLanguageIndex ? (
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
    [languages, currentLanguageIndex]
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
  currentLanguageIndex: PropTypes.number,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      fullName: PropTypes.string,
      path: PropTypes.string.isRequired
    })
  ).isRequired
}

LanguageDropdown.defaultProps = {}

export default LanguageDropdown
