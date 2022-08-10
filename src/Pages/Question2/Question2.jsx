import React from 'react';
import Header from '../../Components/Header/Header';

const Question2 = () => (
  <>
    <Header />
    <div>
      Question2
      <div id="cards">

        <div className="card">
          <h1>Pessoas Totais</h1>
          <p>
            data.total
          </p>
        </div>
        <div className="card">
          <h1>Pessoas Online</h1>
          <p>
            data.online
          </p>
        </div>
        <div className="card">
          <h1>Pessoas Offline</h1>
          <p>
            data.offline
          </p>
        </div>
      </div>

    </div>
  </>
);

export default Question2;
