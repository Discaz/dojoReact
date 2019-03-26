import React, { Component } from "react"

import Congo from "./components/Congo"
import Header from "./components/Header"

import "./App.css"

class App extends Component {
  render() {
    const tabPrix = [1, 2, 35]
    return (
      <div className="App">
        <Header prix={tabPrix} sentiment="seum" />
        <Congo />
      </div>
    )
  }
}

export default App
