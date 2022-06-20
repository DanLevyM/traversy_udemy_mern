import React from 'react';
import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return (
    <div
      className='card'
      style={{ backgroundColor: reverse ? '#000' : '#fff' }}
    >
      {children}
    </div>
  );
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

export default Card;
