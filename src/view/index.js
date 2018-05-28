import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import Header from "../components/header"
import ViewMode from "../components/viewMode"
import ProductList from "../components/cards"

const theme = {
  link: "#0288D1",
  dark: "#424242",
  yellow: "#ffca28",
  grey: "#757575",
  lighten: "#eee"
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <ViewMode />
          <ProductList />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App
