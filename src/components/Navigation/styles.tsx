import styled, {css} from 'styled-components'


interface Props {
  readonly ratio: number
}

export const Box = styled.div`
  height: calc(100vh - 5rem);
  @media (max-width: 767px) {
    height: auto;
  }
`
export const WidthBox = styled.div<Props>`
  width: ${({ratio}) => `${ratio * 100}%`};
`
