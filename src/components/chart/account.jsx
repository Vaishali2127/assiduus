import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { CardWrapper, UpperWrapper } from './styles';
import { Divider } from '@mui/material';

const Account = () => {
  const data = [0, 20, 70, 40, 50, 50, 70, 80];
  const width = 400;
  const height = 200;

  const svgRef = useRef();

  useEffect(() => {
    // D3 code to create the line chart
    const svg = d3.select(svgRef.current);

    // Define your data scales
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'blue') // Customize the line color
      .attr('stroke-width', 2) // Customize the line width
      .attr('d', line);

    // Add x-axis
    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, [data, width, height]);

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
      <svg ref={svgRef} width={width} height={height}></svg>
    </CardWrapper>
  );
};

export default Account;
