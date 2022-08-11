import React from 'react';
import Container from './Home.styles';
import Header from '../../Components/Header/Header';
import imgHome from '../../imgs/home.png';

const Home = () => (
  <Container>
    <Header />
    <div className="wrapperHome">
      <img src={imgHome} alt="Imagem de Home" />
      <h1>Bem Vindo ao sistema de Clientes da Vagalume !</h1>
    </div>
  </Container>
);

export default Home;
