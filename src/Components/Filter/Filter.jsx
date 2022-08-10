import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleInput, filter, clients }) => (
  <div>
    <select onChange={handleInput} name="selectClient">
      {clients && clients.map((client) => (
        <option value={client} key={client}>{client}</option>
      ))}
    </select>
    <label htmlFor="dataInicial">
      Data inicial
      <input onChange={handleInput} value={filter.initialDate} type="date" />
    </label>
    <label htmlFor="dataInicial">
      Data Final
      <input onChange={handleInput} value={filter.finalDate} type="date" />
    </label>
  </div>
);

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  filter: PropTypes.objectOf.isRequired,
  clients: PropTypes.arrayOf.isRequired,
};

export default Filter;
