import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import generalAcess from '../../Middleware/acessAll';
import userByClient from '../../Middleware/infosClients';

const Question2 = () => {
  const [acessAll, setAcessAll] = useState({
    general: 0,
    online: 0,
    offline: 0,
  });
  const [acessClient, setAcessClient] = useState(0);

  useEffect(() => {
    const fetchGeneralAcess = async () => {
      setAcessAll(await generalAcess());
    };
    const fetchClientAcess = async () => {
      setAcessClient(await userByClient('vagalume', '2022/08/01', '2022/08/10'));
    };
    fetchGeneralAcess();
    fetchClientAcess();
  }, []);

  return (
    <>
      <Header />
      <div>
        Question2
        <div id="cards">
          <Card title="Pessoas Totais" info={acessAll.general} />
          <Card title="Pessoas Online" info={acessAll.online} />
          <Card title="Pessoas Offline" info={acessAll.offline} />
          <Card title="Pessoas conectadas no período" info={acessClient} />
        </div>

      </div>
    </>
  );
};

export default Question2;
