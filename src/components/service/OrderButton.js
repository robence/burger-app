import React from 'react';

import styled, { css } from 'styled-components';

const orderButton = ({ title, onClick }) => {
  const Span = styled.span`
    background: transparent;
    color: grey;
    border: 2px solid grey;
    margin-top: 10px;
    border-radius: 20px;
    padding: 10px;
    width: 20vw;
    max-width: 200px;
    min-width: 180px;
    display: flex;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &: hover {
      color: white;
      background: grey;
    }

    ${(props) =>
      props.primary &&
      css`
        background: grey;
        color: white;

        &:hover {
          opacity: 0.6;
        }
      `}
  `;

  const primary = title === 'Bite!';

  return (
    <Span primary={primary} onClick={onClick}>
      {title}
    </Span>
  );
};

export default orderButton;
