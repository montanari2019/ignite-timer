import React from 'react'
import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button variant="warning" />
      <Button variant="success" />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
