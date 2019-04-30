import React from 'react';

import styled, { css } from 'styled-components';

export default function ActionButton({ onClick, children, primary }) {
  const Span = styled.span`
    color: grey;
    border: 2px solid grey;
    margin: 10px;
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 180px;
    display: flex;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    transition: all 0.4s ease;

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

  return (
    <Span primary={primary} onClick={onClick}>
      {children}
    </Span>
  );
}
