import React, { Fragment } from 'react'
import { Container, Avatar, Separator, Menu, MenuItem } from './styles'

import avatar from '../../assets/img/avatar.jpeg'

const Header = () => (
  <Fragment>
    <Container>
      <Avatar src={avatar} />
      <Separator />
      <Menu>
        <MenuItem onClick={() => console.log('aboutme')}>aboutme</MenuItem>
        <MenuItem onClick={() => console.log('exp')}>exp</MenuItem>
        <MenuItem onClick={() => console.log('skills')}>skills</MenuItem>
        <MenuItem onClick={() => console.log('works')}>projects</MenuItem>
        <MenuItem onClick={() => console.log('github')}>github</MenuItem>
      </Menu>
    </Container>
  </Fragment>
)

export default Header
