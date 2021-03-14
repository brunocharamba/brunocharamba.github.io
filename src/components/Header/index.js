import React, { Fragment, Component } from 'react'
import { Container, Avatar, Separator, Menu, MenuItem } from './styles'

import avatar from '../../assets/img/avatar.jpeg'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  state = { width: 0, height: 0 }

  componentDidMount() {
    this.updateWindowDimensions()

    window.addEventListener('resize', this.updateWindowDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions)
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  handleClick = section => {
    this.props.onScroll(section.target.textContent)
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Avatar src={avatar} />
          <Separator />
          {this.state.width > 768 && (
            <Menu>
              <MenuItem onClick={section => this.handleClick(section)}>
                !aboutme
              </MenuItem>
              <MenuItem onClick={section => this.handleClick(section)}>
                exp
              </MenuItem>
              <MenuItem onClick={section => this.handleClick(section)}>
                skills
              </MenuItem>
              {/* <MenuItem onClick={section => this.handleClick(section)}>projects</MenuItem> */}
              <MenuItem onClick={section => this.handleClick(section)}>
                github
              </MenuItem>
            </Menu>
          )}
        </Container>
      </Fragment>
    )
  }
}
