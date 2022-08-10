import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import infosClients from '../../Middleware/infosClients';
import { Container, Title, Result } from './Question1.styles';
import uniqueClient from '../../Middleware/uniqueClient';
import Filter from '../../Components/Filter/Filter';
import imgFilter from '../../imgs/filter.png';

const Question1 = () => {
  const [userByClient, setUserByClient] = useState();
  const [clients, setClients] = useState([]);
  const [filter, setFilter] = useState({
    selectClient: 'vagalume',
    initialDate: '2022-08-01',
    finalDate: '2022-08-10',
  });

  const handleInput = ({ target }) => {
    setFilter({ ...filter, [target.name]: target.value });
  };

  useEffect(() => {
    const getUniqueClient = async () => {
      setClients(await uniqueClient());
    };
    getUniqueClient();
  }, []);

  const searchUser = async () => {
    const users = await infosClients(filter);
    setUserByClient(users);
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Questão 1</Title>
        <Filter handleInput={handleInput} clients={clients} filter={filter} />
        <Result>
          {!userByClient
            ? (
              <div className="notSearch">
                <img src={imgFilter} alt="Imagem de filtragem" />
                <h1>Clique no botão para saber o número de usuários</h1>
              </div>
            )
            : (
              <div className="yesSearch">
                <h2>O cliente  Possui</h2>
                <h1>{userByClient}</h1>
                <h2>Usuários!!!</h2>
              </div>
            )}
        </Result>

        <button type="button" onClick={searchUser}>
          Pesquisar
        </button>
      </Container>
    </>
  );
};

export default Question1;
