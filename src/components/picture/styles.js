import styled from 'styled-components'

const SCPicture = styled.picture`
  .no-js & {
    display: none;
  }

  img {
    transition: opacity ${({ loadAnimationDelay }) => loadAnimationDelay}s
      ease-in;
    opacity: 0;

    .no-js &,
    &.loaded {
      opacity: 1;
    }
  }
`

export default SCPicture
