import React from 'react';
import { Link } from 'react-router-dom';
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
      <ul>
        <li><Link to="/questao1">Questão 1</Link></li>
        <li><Link to="/questão2">Questão 2</Link></li>
      </ul>
    </Nav>
  </Container>
);

export default Header;
