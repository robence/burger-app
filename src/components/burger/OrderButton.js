import React from 'react';

export default function OrderButton({ title, onClick }) {
  const style = {
    border: '1px solid black',
    borderRadius: '20px',
    padding: '3px',
    width: '200px',
    display: 'flex',
    fontWeight: '500',
    justifyContent: 'center',
    height: '30px',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <span onClick={onClick} style={style}>
      {title}
    </span>
  );
}
