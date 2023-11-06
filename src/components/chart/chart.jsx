import React from 'react';
import Account from './account';
import Invoices from './invoices';
import Cashflow from './cashflow';
import Watchlist from './watchlist';
import { Wrapper } from './styles';

const Chart = () => {
  return (
    <Wrapper>
      <Account />
      <Invoices />
      <Cashflow />
      <Watchlist />
    </Wrapper>
  );
};

export default Chart;
