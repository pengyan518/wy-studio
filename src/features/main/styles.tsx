import styled, {css} from 'styled-components'


export const Loading = styled.div`
  color: #fba300;
  font-size: 15px;
  width: 60px;
  flex: 0 1 60px;
`
interface Props {
  readonly activated: boolean
}
export const Tab = styled.div<Props>`
  //margin: 0.2rem 0.75rem 0.4rem;
  font-size: 1.25rem;
  background: ${({activated}) => (activated ? `#fff` : `transparent`)};
  border-color: #5fd0ae;
  border-radius: 4px 4px 0 0;
  //box-shadow: 2px 0 1px 1px #4b95c0;
  //padding: 0.2rem 1.75rem;

  ${({activated}) =>
    activated &&
    css`
      border-right: 3px solid #4b95c0;
    `}

  &:focus {
    outline: none;
  }

  &:active {
    border-style: solid;
  }

  &:hover {
    cursor: pointer;
  }
`

interface PaperProps {
  readonly isDrawerOpened?: boolean
}

export const Wrapper = styled.div<PaperProps>`
  width: 100%;
  ${({isDrawerOpened}) =>
    isDrawerOpened &&
    css`
      filter: blur(8px);
    `}
`

export const Paper = styled.div`
  box-shadow: 0 -1px 1px 1px #4b95c0;
  min-height: 80vh;
`

//
// export const LoadingBox = styled.div`
//   padding-top: 25px;
//   padding-bottom: 25px;
// `
//
// export const WidthBox = styled(Box)`
//   width: ${({ratio}) => `${ratio * 100}%`};
// `
