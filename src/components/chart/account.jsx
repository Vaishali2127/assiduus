import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { CardWrapper, UpperWrapper } from './styles';
import { Divider } from '@mui/material';

const Account = () => {
  const [month, setMonth] = React.useState('');
  const [manage, setManage] = React.useState('');

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };
  const handleChangeManage = (event) => {
    setManage(event.target.value);
  };

  return (
    <CardWrapper>
      <UpperWrapper>
        <p>Checking account</p>
        <Box sx={{ minWidth: 120, display: 'flex' }}>
          <FormControl sx={{ mt: 1, mb: 1, minWidth: 120 }}>
            <Select
              style={{ height: '30px', padding: '20px 0px' }}
              value={manage}
              onChange={handleChangeManage}
              displayEmpty
            >
              <MenuItem value="">Manage</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mt: 1, mb: 1, minWidth: 120 }}>
            <Select
              style={{ height: '30px', padding: '20px 0px' }}
              value={month}
              onChange={handleChangeMonth}
              displayEmpty
            >
              {/* <MenuItem value="">Month</MenuItem> */}
              <MenuItem value="">January</MenuItem>
              <MenuItem value="February">February</MenuItem>
              <MenuItem value="March">March</MenuItem>
              <MenuItem value="April">April</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="June">June</MenuItem>
              <MenuItem value="July">July</MenuItem>
              <MenuItem value="August">August</MenuItem>
              <MenuItem value="September">September</MenuItem>
              <MenuItem value="October">October</MenuItem>
              <MenuItem value="November">November</MenuItem>
              <MenuItem value="December">December</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </UpperWrapper>
      <Divider />
      hi
    </CardWrapper>
  );
};

export default Account;
