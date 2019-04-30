import React from 'react';
import styled from 'styled-components';

export default function ActionContainer({ children }) {
  const Div = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
  `;

  return <Div>{children}</Div>;
}
