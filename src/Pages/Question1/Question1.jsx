import React, { useState } from 'react';
import infosClients from '../../Middleware/infosClients';

const Question1 = () => {
  const [userByClient, setUserByClient] = useState();

  const searchUser = async () => {
    const users = await infosClients('vagalume', '10/08/2022', '01/08/2022');
    setUserByClient(users);
  };

  return (
    <div>
      <h1>Questão 1</h1>
      {!userByClient
        ? <h1>Clique no botão para saber o número de usuários</h1>
        : <h1>{userByClient}</h1>}

      <button type="button" onClick={searchUser}>
        Pesquisar
      </button>
    </div>
  );
};

export default Question1;
