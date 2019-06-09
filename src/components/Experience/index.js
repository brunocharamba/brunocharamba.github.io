import React, { Component } from 'react'

import {
  Container,
  Wrapper,
  Column,
  Title,
  Item,
  ItemTitle,
  Location,
  Description,
  Date,
  Separator
} from './styles'

export default class Experience extends Component {
  state = {
    experiences: [
      {
        title: 'sr. software developer',
        location: '@avanade',
        locationUrl: '',
        description:
          'Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database',
        date: '2019-today'
      },
      {
        title: 'software developer',
        location: '@avanade',
        locationUrl: '',
        description:
          'Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database',
        date: '2018-2019'
      },
      {
        title: 'software analyst',
        location: '@joanajuliao',
        locationUrl: 'instagram',
        description: 'Frontend and PHP developer with MySQL database',
        date: '2016-2018'
      },
      {
        title: 'jr. software developer',
        location: '@allen',
        locationUrl: '',
        description:
          'Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database',
        date: '2014-2016'
      }
    ],
    education: [
      {
        title: 'react/react-native/node',
        location: '@rocketseat',
        locationUrl: '',
        description:
          'Nulla malesuada orci ac mauris tincidunt, eget gravida sapien lobortis.',
        date: '2019-2019'
      },
      {
        title: 'bsc. computer engineering',
        location: '@ecomp-poli-upe',
        locationUrl: '',
        description:
          'Nulla malesuada orci ac mauris tincidunt, eget gravida sapien lobortis. Integer aliquet aliquam ipsum at egestas.',
        date: '2008-2014'
      }
    ]
  }

  render() {
    return (
      <Container>
        <Column>
          <Wrapper>
            <Title>experience</Title>
            <Separator>.</Separator>
            {this.state.experiences.map(exp => {
              return (
                <Item>
                  <ItemTitle>{exp.title}</ItemTitle>
                  <Location>{exp.location}</Location>
                  <Description>
                    <div>{exp.description}</div>
                  </Description>
                  <Date>{exp.date}</Date>
                </Item>
              )
            })}
          </Wrapper>
        </Column>
        <Column>
          <Wrapper>
            <Title>education</Title>
            <Separator>.</Separator>
            {this.state.education.map(edu => {
              return (
                <Item>
                  <ItemTitle>{edu.title}</ItemTitle>
                  <Location>{edu.location}</Location>
                  <Description>{edu.description}</Description>
                  <Date>{edu.date}</Date>
                </Item>
              )
            })}
          </Wrapper>
        </Column>
      </Container>
    )
  }
}
