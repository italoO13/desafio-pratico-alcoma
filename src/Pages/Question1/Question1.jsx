import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import infosClients from '../../Middleware/infosClients';
import { Container } from './Question1.styles';
import uniqueClient from '../../Middleware/uniqueClient';
import Filtro from '../../Components/Filtro/Filtro';

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
        <h1>Questão 1</h1>
        <Filtro handleInput={handleInput} clients={clients} filter={filter} />
        <div>
          {!userByClient
            ? <h1>Clique no botão para saber o número de usuários</h1>
            : <h1>{userByClient}</h1>}
        </div>

        <button type="button" onClick={searchUser}>
          Pesquisar
        </button>
      </Container>
    </>
  );
};

export default Question1;
