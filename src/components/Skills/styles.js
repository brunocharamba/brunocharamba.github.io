import styled from 'styled-components'
import { Colors } from '../../styles'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 5%;
  margin-bottom: 70px;
  text-align: right;
`

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
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
const CardWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  }
`
const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid ${Colors.dark};
  font-size: 12px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`

export { Container, Wrapper, Separator, Title, CardWrapper, Card }
