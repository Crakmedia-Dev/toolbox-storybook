import { css } from 'styled-components'

export const defaultStyles = css`
  font-family: ${props => props.theme.global.font.family};
  font-size: ${props => props.theme.global.font.size};
  line-height: ${props => props.theme.global.font.height};
  font-weight: ${props => props.theme.global.font.weight};
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &,
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

export const flexStyles = css`
  display: flex;
`
