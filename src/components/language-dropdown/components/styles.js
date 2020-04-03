import styled, { css } from 'styled-components'

const LanguageList = styled.ul`
  ${({
    fontSize = '16px',
    itemCount = 1,
    innerPadding = 0.2,
    arrowSize = 0.3,
    isListVisible,
    itemHeight = 2.5
  }) => {
    const listHeight = itemCount * itemHeight
    return css`
      font: ${fontSize} sans-serif;
      height: ${isListVisible ? listHeight : itemHeight}em;
      min-width: 7.5em;
      background-color: #fff;
      box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.4);
      border-radius: ${itemHeight / 2}em;
      transition: height 0.3s cubic-bezier(0.2, 0.6, 0.5, 1.3);
      overflow: hidden;
      cursor: pointer;
      display: inline-flex;
      flex-direction: column;

      &,
      * {
        outline: 0;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      .lang {
        height: ${itemHeight}em;
        flex-shrink: 0;
        display: block;

        &.selected {
          order: -1;
          position: relative;

          .arrow {
            position: absolute;
            transition: transform 0.2s linear;
            transform: translateY(-50%)
              ${isListVisible ? 'scaleY(1)' : 'scaleY(-1)'};
            top: 50%;
            right: 1em;
          }

          .arrow:after {
            content: '';
            display: block;
            padding: ${arrowSize}em;
            border-style: solid;
            border-color: black;
            transform: rotate(45deg);
            border-width: ${arrowSize / 2}em 0 0 ${arrowSize / 2}em;
            margin-top: ${arrowSize * 1.25}em;
          }
        }

        .lang-inner {
          font-size: 1em;
          outline: 0;
          border: 0;
          text-transform: uppercase;
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          background-color: transparent;
          text-decoration: none;
          padding: ${innerPadding}em;
          color: #000;

          ::-moz-focus-inner {
            padding: 0;
            border: 0;
          }

          img {
            margin-right: 1em;
            height: ${itemHeight - innerPadding * 2}em;
          }
        }
      }
    `
  }}
`
export default LanguageList
