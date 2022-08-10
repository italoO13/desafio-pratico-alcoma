import React, { useState, useEffect } from 'react';
import infosClients from '../../Middleware/infosClients';
import uniqueClient from '../../Middleware/uniqueClient';

const Question1 = () => {
  const [userByClient, setUserByClient] = useState();
  const [clients, setClients] = useState([]);
  const [selectClient, setselectClient] = useState();
  const [initialDate, setInitialDate] = useState('2022-08-01');
  const [finalDate, setFinalDate] = useState('2022-08-10');

  useEffect(() => {
    const getUniqueClient = async () => {
      setClients(await uniqueClient());
      setselectClient('vagalume');
    };
    getUniqueClient();
  }, []);

  const searchUser = async () => {
    const users = await infosClients(selectClient, finalDate, initialDate);
    setUserByClient(users);
  };

  return (
    <div>
      <h1>Questão 1</h1>
      <div>
        <select onChange={({ target }) => setselectClient(target.value)}>
          {clients && clients.map((client) => (
            <option value={client} key={client}>{client}</option>
          ))}
        </select>
        <label htmlFor="dataInicial">
          Data inicial
          <input onChange={({ target }) => setInitialDate(target.value)} value={initialDate} type="date" />
        </label>
        <label htmlFor="dataInicial">
          Data Final
          <input onChange={({ target }) => setFinalDate(target.value)} value={finalDate} type="date" />
        </label>
      </div>

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
