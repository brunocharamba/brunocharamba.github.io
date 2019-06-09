import styled from 'styled-components'
import { Colors } from '../../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5%;
  margin-bottom: 80px;
`
const Wrapper = styled.div`
  flex-direction: column;
  text-align: right;
`
const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
`
const Description = styled.div`
  font-size: 12px;
  color: ${Colors.darker};
  text-align: right;
  padding-left: 55%;
`
const Separator = styled.div`
  margin-bottom: 10px;
  text-align: right;
`
const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`
const Button = styled.a`
  margin-left: 20px;
  padding: 8px;
  border: 1px solid ${Colors.darker};
  text-align: right;
  font-size: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.darker};
    color: ${Colors.white};
  }
`

export {
  Container,
  Description,
  Wrapper,
  Title,
  Separator,
  ButtonWrapper,
  Button
}
