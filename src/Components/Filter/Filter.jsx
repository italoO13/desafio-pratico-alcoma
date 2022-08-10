import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Filter.styles';

const Filter = ({ handleInput, filter, clients }) => (
  <Container>
    <label htmlFor="selectClient">
      Cliente
      <select onChange={handleInput} name="selectClient">
        {clients && clients.map((client) => (
          <option value={client} key={client}>{client}</option>
        ))}
      </select>
    </label>
    <label htmlFor="dataInicial">
      Data inicial
      <input onChange={handleInput} value={filter.initialDate} name="initialDate" type="date" />
    </label>
    <label htmlFor="dataInicial">
      Data Final
      <input onChange={handleInput} value={filter.finalDate} name="finalDate" type="date" />
    </label>
  </Container>
);

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  filter: PropTypes.objectOf.isRequired,
  clients: PropTypes.arrayOf.isRequired,
};

export default Filter;
