import React from 'react';

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
