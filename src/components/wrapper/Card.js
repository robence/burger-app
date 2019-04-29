import React from 'react';
import styled from 'styled-components';

export default function CardComponent({ children }) {
  const Card = styled.div`
    width: inherit;
    height: auto;
    background-color: white;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 5px;
    box-sizing: border-box;
  `;

  return <Card>{children}</Card>;
}
