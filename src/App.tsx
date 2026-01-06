import React from 'react'
import {Provider} from 'react-redux'
import styled, {keyframes} from 'styled-components'
// import logo from './logo.svg'
import Main from './features/main/Main'
import store from './store'
// import styled from '@emotion/styled'
// import {keyframes} from '@emotion/core'
// import bg from './assets/img/medialibrary-top-banner-bg.jpg'

const Container = styled.div`
  /* background-color: #f1f1f1; */
  min-height: 100vh;
`


const App = () => (
  <Provider store={store}>
    <Container>
      <Main />
    </Container>
  </Provider>
)

export default App
