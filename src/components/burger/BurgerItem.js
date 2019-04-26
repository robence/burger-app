import React from 'react';

const BurgerItem = ({ item }) => {
  const style = {
    margin: '2px',
  };

  const imgStyle = {
    height: 'auto',
    width: 'auto',
    maxWidth: '100px',
    maxHeight: '100px',
  };

  return (
    <div style={style}>
      <img style={imgStyle} src={`${item}.png`} alt="logo" />
    </div>
  );
};

// {item}

export default BurgerItem;
