import React, { Component, Fragment } from 'react'
import scrollToComponent from 'react-scroll-to-component'

import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Github from './components/Github'
import './App.css'

export default class App extends Component {
  scrollTo = section => {
    console.log(section)
    let ref = null
    switch (section) {
      case 'aboutme':
        ref = this.About
        break
      case 'exp':
        ref = this.Experience
        break
      case 'skills':
        ref = this.Skills
        break
      case 'project':
        ref = this.Skills
        break
      case 'github':
        ref = this.Github
        break
      default:
        ref = this.Github
        break
    }
    scrollToComponent(ref, {
      offset: -20,
      align: 'top',
      duration: 800,
      ease: 'inExpo'
    })
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          <Header onScroll={this.scrollTo} />
          <About
            ref={section => {
              this.About = section
            }}
          />
          <Experience
            ref={section => {
              this.Experience = section
            }}
          />
          <Skills
            ref={section => {
              this.Skills = section
            }}
          />
          <Github
            ref={section => {
              this.Github = section
            }}
          />
        </div>
      </Fragment>
    )
  }
}
