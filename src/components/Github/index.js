import React, { Component } from 'react'
import api from '../../services/api'
import {
  Container,
  Wrapper,
  Card,
  Title,
  Separator,
  CardTitle,
  CardDescription,
  CardBottom
} from './styles'

export default class Github extends Component {
  constructor(props) {
    super(props)
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  state = { width: 0, height: 0, repositories: [] }

  async componentWillMount() {
    await this.loadRepositories()
  }

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

  loadRepositories = async () => {
    try {
      let { data } = await api.get('/users/brunocharamba/repos')
      data = data.filter(d => !d.fork)
      this.setState({ repositories: data })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <Container>
        <Title>github</Title>
        <Separator>.</Separator>
        <Wrapper>
          {this.state.repositories.map(r => {
            return (
              <Card key={r.id}>
                <CardTitle>{r.name}</CardTitle>
                <CardDescription>{r.description}</CardDescription>
                <CardBottom>
                  {r.language} | forks: {r.forks} | issues:{' '}
                  {r.open_issues_count}
                </CardBottom>
              </Card>
            )
          })}
        </Wrapper>
      </Container>
    )
  }
}
