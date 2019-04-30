import React from 'react';
import styled, { css } from 'styled-components';

export default function FlexContainerComponent({ children, column, center }) {
  const FlexContainer = styled.div`
    display: flex;
    height: inherit;

    ${(props) =>
      props.center &&
      css`
        align-items: center;
        justify-content: center;
      `}

    ${(props) =>
      props.column &&
      css`
        flex-direction: column;
      `}
  `;

  return (
    <FlexContainer column={column} center={center}>
      {children}
    </FlexContainer>
  );
}
