import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CardWrapper } from './styles';
import { Divider } from '@mui/material';

function createData(name, this_month, YTD) {
  return { name, this_month, YTD };
}

const rows = [
  createData('Sales', 159, 6.0),
  createData('Advertising', 237, 9.0),
  createData('Inventory', 262, 16.0),
  createData('Entertainment', 305, 3.7),
  createData('Product', 356, 16.0),
];

const Watchlist = () => {
  return (
    <CardWrapper>
      <p
        style={
          {
            // margin: 0,
            // padding: '10px',
          }
        }
      >
        Account watchlist
      </p>
      <Divider />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Account</TableCell>
              <TableCell align="right">This month</TableCell>
              <TableCell align="right">YTD</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.this_month}</TableCell>
                <TableCell align="right">{row.YTD}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardWrapper>
  );
};

export default Watchlist;
