import React, { Component } from 'react'

import {
  Container,
  Description,
  Wrapper,
  Title,
  Separator,
  ButtonWrapper,
  Button
} from './styles'

export default class About extends Component {
  render () {
    return (
      <Container>
        <Wrapper>
          <Title>about me</Title>
        </Wrapper>
        <Separator>.</Separator>
        <Description>
          <b style={{ fontSize: 13, marginBottom: 5100 }}>
            Hi! I'm a full stack developer who searches for new and promising
            technologies to build and enhance my knowledge and projects that I
            participate.
          </b>{' '}
          <br />
          <br />
          I'm 30 years old programmer from Brazil who studied in Universidade de
          Pernambuco for my bachelor's degree, and since have been working and
          learning new technologies related to the IT industry with no prejudice
          from any area: frontend, backend, mobile or whatever. <br />
          <b>If it's cool, i'm in.</b>
          <br />
          <br />
          If you want to contact me for any reason, feel free to do it, I'm
          always looking for new opportunities and things to do. At the bottom
          you can find some links to my social networks and other useful
          content.
        </Description>
        <ButtonWrapper>
          <Button
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/bruno-charamba/',
                '_blank'
              )
            }
          >
            LINKEDIN
          </Button>
          <Button
            onClick={() =>
              window.open('https://github.com/brunocharamba', '_blank')
            }
          >
            GITHUB
          </Button>
          <Button onClick={() => window.open('mailto:brunocharamba@gmail.com')}>
            SEND EMAIL
          </Button>
          <Button onClick={() => console.log('download resume')}>
            DOWNLOAD RESUME
          </Button>
        </ButtonWrapper>
      </Container>
    )
  }
}
