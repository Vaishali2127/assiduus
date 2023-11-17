import React from 'react';
import Account from './account';
import Invoices from './invoices';
import Cashflow from './cashflow';
import Watchlist from './watchlist';
import { Wrapper } from './styles';

const Chart = () => {
  const accountData = [
    { date: new Date('2020-01-01'), value: 0 },
    { date: new Date('2020-01-02'), value: 5 },
    { date: new Date('2020-01-03'), value: 1 },
    { date: new Date('2020-01-04'), value: 6 },
    { date: new Date('2020-01-05'), value: 2 },
    { date: new Date('2020-01-06'), value: 4 },
    { date: new Date('2020-01-07'), value: 1 },
    { date: new Date('2020-01-08'), value: 9 },
    { date: new Date('2020-01-09'), value: 3 },
    { date: new Date('2020-01-10'), value: 4 },
  ];

  const invoicesData = [
    { date: 'Older', value: 10 },
    { date: 'Jan 01-08', value: 20 },
    { date: 'Jan 09-16', value: 50 },
    { date: 'Jan 17-24', value: 30 },
    { date: 'Jan 25-31', value: 40 },
    { date: 'Future', value: 30 },
  ];
  return (
    <Wrapper>
      <Account data={accountData} />
      <Invoices data={invoicesData} />
      <Cashflow />
      <Watchlist />
    </Wrapper>
  );
};

export default Chart;
