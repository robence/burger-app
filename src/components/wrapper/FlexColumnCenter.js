import React from 'react';
import styled from 'styled-components';

export default function FlexContainerComponent({ children }) {
  const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;
    box-sizing: border-box;
  `;

  return <FlexContainer>{children}</FlexContainer>;
}
