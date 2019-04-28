import React from 'react';
import styled from 'styled-components';
import BurgerItem from './BurgerItem';
import { useStore } from '../../store/useStore';

export default function BurgerList() {
  const { state } = useStore();

  const getContent = () => {
    return state.burgerItems.map((x, i) => <BurgerItem item={x} key={i} />);
  };

  const Div = styled.div`
    border: 1px solid black;
    margin: 10px;
    /* padding: 20px; */
    box-sizing: border-box;
    /* margin: 10px; */
    /* height: 80%; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  return <Div>{getContent()}</Div>;
}
