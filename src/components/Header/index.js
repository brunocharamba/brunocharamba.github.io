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

  render() {
    return (
      <Fragment>
        <Container>
          <Avatar src={avatar} />
          <Separator />
          {this.state.width > 768 && (
            <Menu>
              <MenuItem onClick={() => console.log('aboutme')}>
                aboutme
              </MenuItem>
              <MenuItem onClick={() => console.log('exp')}>exp</MenuItem>
              <MenuItem onClick={() => console.log('skills')}>skills</MenuItem>
              {/* <MenuItem onClick={() => console.log('works')}>projects</MenuItem> */}
              <MenuItem onClick={() => console.log('github')}>github</MenuItem>
            </Menu>
          )}
        </Container>
      </Fragment>
    )
  }
}
