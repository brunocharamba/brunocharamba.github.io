import styled from 'styled-components'
import { Colors } from '../../styles'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 5%;
  margin-bottom: 50px;
`
const Wrapper = styled.div`
  flex-direction: column;
  text-align: right;
`
const Column = styled.div`
  flex: 0.5;
  text-align: right;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
`
const Separator = styled.div`
  margin-bottom: 10px;
`
const Item = styled.div`
  margin-bottom: 18px;
`
const ItemTitle = styled.div`
  font-size: 16px;
`
const Location = styled.div`
  font-size: 14px;
  font-style: italic;
  cursor: pointer;
`
const Description = styled.div`
  font-size: 12px;
  padding-left: 30%;
  color: ${Colors.dark};
`
const Date = styled.div`
  font-size: 14px;
  font-style: italic;
`

export {
  Container,
  Wrapper,
  Column,
  Title,
  Item,
  Separator,
  ItemTitle,
  Location,
  Description,
  Date
}
