import React from 'react';
import { Container, Wrapper, Nav } from './Header.styles';
import logo from '../../imgs/logo.png';

const Header = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Container>
    <Wrapper>
      <img src={logo} alt="logo Vagalume" />
    </Wrapper>
    <Nav>
      <h1>Desafio Prático</h1>
    </Nav>
  </Container>
);

export default Header;
