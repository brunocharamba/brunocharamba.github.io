import React, { Component } from "react";

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
  Separator,
} from "./styles";

export default class Experience extends Component {
  state = {
    experiences: [
      {
        title: "software analyst",
        location: "@joanajuliao",
        locationUrl: "https://www.instagram.com/joanajuliaomarca/",
        description:
          "Frontend and Backend developer with MySQL/Mongo databases, React and Node.",
        date: "2019-2020",
      },
      {
        title: "sr. software developer",
        location: "@avanade",
        locationUrl: "https://www.avanade.com/",
        description:
          "Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database",
        date: "2019-2019",
      },
      {
        title: "software developer",
        location: "@avanade",
        locationUrl: "https://www.avanade.com/",
        description:
          "Frontend, Sharepoint and Xamarin developer with C# backend and SQLServer database",
        date: "2018-2019",
      },
      {
        title: "software analyst",
        location: "@joanajuliao",
        locationUrl: "https://www.instagram.com/joanajuliaomarca/",
        description: "Frontend and PHP developer with MySQL database",
        date: "2016-2018",
      },
      {
        title: "jr. software developer",
        location: "@allen",
        locationUrl: "http://allen.com.br/",
        description:
          "Frontend and Sharepoint developer with C# backend and SQLServer database",
        date: "2014-2016",
      },
    ],
    education: [
      {
        title: "bootcamp rocketseat",
        location: "@rocketseat",
        locationUrl: "https://rocketseat.com.br/",
        description:
          "An intensive bootcamp focused in react, react native and nodejs. ",
        date: "2019-2019",
      },
      {
        title: "bsc. computer engineering",
        location: "@ecomp-poli-upe",
        locationUrl: "http://upe.poli.br/",
        description:
          "Bachelor's degree in computer engineering attend in Universidade de Pernambuco",
        date: "2008-2014",
      },
    ],
  };

  render() {
    return (
      <Container>
        <Column>
          <Wrapper>
            <Title>education</Title>
            <Separator>.</Separator>
            {this.state.education.map((edu) => {
              return (
                <Item key={edu.title + Math.random()}>
                  <ItemTitle>{edu.title}</ItemTitle>
                  <Location
                    onClick={() => window.open(edu.locationUrl, "_blank")}
                  >
                    {edu.location}
                  </Location>
                  <Description>{edu.description}</Description>
                  <Date>{edu.date}</Date>
                </Item>
              );
            })}
          </Wrapper>
        </Column>
        <Column>
          <Wrapper>
            <Title>experience</Title>
            <Separator>.</Separator>
            {this.state.experiences.map((exp) => {
              return (
                <Item key={exp.title + Math.random()}>
                  <ItemTitle>{exp.title}</ItemTitle>
                  <Location
                    onClick={() => window.open(exp.locationUrl, "_blank")}
                  >
                    {exp.location}
                  </Location>
                  <Description>
                    <div>{exp.description}</div>
                  </Description>
                  <Date>{exp.date}</Date>
                </Item>
              );
            })}
          </Wrapper>
        </Column>
      </Container>
    );
  }
}
