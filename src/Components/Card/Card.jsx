import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, info }) => (
  <div className="card">
    <h1>{title}</h1>
    <p>
      {info}
    </p>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Card;
