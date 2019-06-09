import styled from 'styled-components'

import { Colors } from '../../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  z-index: -99;
`
const Avatar = styled.img`
  position: absolute;
  left: 0;
  margin-left: 10%;
  display: block;
  width: 7%;
  height: auto;
  border: 5px solid ${Colors.white};
  border-radius: 50%;
  z-index: 2;
`

const Separator = styled.div`
  position: absolute;
  width: 90%;
  margin-top: 1.7%;
  border: 0.5px solid ${Colors.darker};
`

const Menu = styled.div`
  position: absolute;
  left: 0;
  margin-left: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  z-index: 3;
`

const MenuItem = styled.div`
  margin-right: 30px;
  cursor: pointer;
`

export { Container, Avatar, Separator, Menu, MenuItem }
