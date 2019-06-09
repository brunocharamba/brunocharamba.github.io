import styled from 'styled-components'
import { Colors } from '../../styles'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 5%;
  margin-bottom: 60px;
  text-align: right;
`
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
`
const Separator = styled.div`
  margin-bottom: 15px;
  margin-right: 10px;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  text-align: right;
  margin-right: 10px;
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 200px;
  margin-right: 10px;
  padding: 15px;
  border: 1px solid ${Colors.dark};
`
const CardTitle = styled.div`
  font-size: 14px;
  font-weight: bolder;
`
const CardDescription = styled.div`
  margin-top: 10px;
  font-size: 10px;
  color: ${Colors.dark};
`
const CardBottom = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 10px;
`

export {
  Container,
  Wrapper,
  Card,
  Title,
  Separator,
  CardTitle,
  CardDescription,
  CardBottom
}
