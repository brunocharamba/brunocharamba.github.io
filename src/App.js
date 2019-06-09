import React, { Fragment } from 'react'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Github from './components/Github'
import './App.css'

const App = () => (
  <Fragment>
    <div className="App">
      <Header />
      <About />
      <Experience />
      <Skills />
      <Github />
    </div>
  </Fragment>
)

export default App
