import React, { Component } from 'react'

import {
  Container,
  Wrapper,
  Separator,
  Title,
  CardWrapper,
  Card
} from './styles'

export default class Skills extends Component {
  state = {
    frontend: ['sharepoint', 'javascript', 'react', 'react-native', 'html/css'],
    backend: ['c#', 'nodejs', 'sql-server', 'mysql', 'mongodb']
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>skills</Title>
        </Wrapper>
        <Separator>.</Separator>
        <CardWrapper>
          {this.state.frontend.map(skl => (
            <Card>{skl}</Card>
          ))}
        </CardWrapper>
        <CardWrapper>
          {this.state.backend.map(skl => (
            <Card>{skl}</Card>
          ))}
        </CardWrapper>
      </Container>
    )
  }
}
