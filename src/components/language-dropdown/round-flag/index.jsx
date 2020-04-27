import React from 'react'
import PropTypes from 'prop-types'
import EN from './en'
import FR from './fr'
import ES from './es'
import IT from './it'
import JA from './ja'
import NL from './nl'
import PT from './pt'
import RU from './ru'

const RoundFlag = ({ code }) => {
  switch (code.toUpperCase()) {
    case 'EN':
      return <EN/>
    case 'FR':
      return <FR/>
    case 'ES':
      return <ES/>
    case 'IT':
      return <IT/>
    case 'JA':
      return <JA/>
    case 'NL':
      return <NL/>
    case 'PT':
      return <PT/>
    case 'RU':
      return <RU/>
    default:
      return <svg/>
  }
}

RoundFlag.propTypes = {
  code: PropTypes.string
}

export default RoundFlag
