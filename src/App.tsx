import React from 'react';
import { Button } from './components/Button';
import { ThemeProvider } from "styled-components"
import { defaultTheme } from './styles/themes/default';


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="danger"/>
      <Button variant="secondary"/>
      <Button variant="warning"/>
      <Button variant="success"/>
      <Button/>
    </ThemeProvider>
  );
}

export default App;
