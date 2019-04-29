import React from 'react';
import styled from 'styled-components';

import BurgerLayout from './burger';
import Card from '../components/wrapper/Card';

export default function LayoutComponent() {
  const Layout = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: lightgrey;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    align-items: start;
  `;

  return (
    <Layout>
      <Card>
        <BurgerLayout />
      </Card>
    </Layout>
  );
}
