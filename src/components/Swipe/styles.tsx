import styled from 'styled-components'

interface Props {
  count?: number
}

export const SwipeRoot = styled.div<Props>`
  //width: 100%;
  //display: grid;
  grid-template-columns: ${({count}) => `repeat(${count}, minmax(0, 1fr))`};
`

export const ControlSection = styled.div`
  width: 100%;
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
