import React from 'react';
import PropTypes from 'prop-types';
import Container from './Card.style';

const Card = ({ title, info }) => (
  <Container>
    <h1>{title}</h1>
    <p>
      {info}
    </p>
  </Container>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Card;
