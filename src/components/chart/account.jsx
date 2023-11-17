import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { CardWrapper } from './styles';
import { Divider } from '@mui/material';
const LineChart = ({ data }) => {
  const d3Chart = useRef();
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedType, setSelectedType] = useState('Manage');

  // You would generate this based on your actual data
  const monthOptions = ['January', 'February', 'March', 'April'];
  const typeOptions = ['Manage', 'Collect'];
  useEffect(() => {
    if (data && d3Chart.current) {
      // Clear the previous chart before redrawing it
      d3.select(d3Chart.current).selectAll('*').remove();

      const filteredData = data.filter(
        (d) => d3.timeFormat('%B')(d.date) === selectedMonth
      );

      const lineGenerator = d3
        .line()
        .x((d) => xScale(d.date))
        .y((d) => yScale(d.value))
        .curve(d3.curveMonotoneX);

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = 550 - margin.left - margin.right;
      const height = 250 - margin.top - margin.bottom;

      // Create root container where we will append all other chart elements
      const svg = d3
        .select(d3Chart.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      // X scale
      const x = d3
        .scaleTime()
        .domain(d3.extent(filteredData, (d) => d.date))
        .range([0, width]);

      // Y scale
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(filteredData, (d) => d.value)])
        .range([height, 0]);

      // Line generator
      const line = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.value))
        .curve(d3.curveMonotoneX);

      // Create axes
      svg
        .append('g')
        .call(
          d3
            .axisBottom(x)
            .ticks(width / 80)
            .tickSizeOuter(0)
        )
        .attr('transform', `translate(0, ${height})`);

      svg.append('g').call(d3.axisLeft(y));

      // Add the line
      svg
        .append('path')
        .datum(filteredData)
        .attr('fill', 'none')
        .attr('stroke', '#47B646')
        .attr('stroke-width', 1.5)
        .attr('d', line);
    }
  }, [data, selectedMonth, selectedType]); // Redraw chart if data or selected month changes

  // Dropdown change handler
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <CardWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <label htmlFor="month-select">Choose a month:</label>
        <div>
          <select
            id="type-select"
            onChange={handleTypeChange}
            value={typeOptions}
            style={{ marginRight: '10px' }}
          >
            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            id="month-select"
            onChange={handleMonthChange}
            value={selectedMonth}
          >
            {monthOptions.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Divider />
      <svg ref={d3Chart}></svg>
    </CardWrapper>
  );
};

export default LineChart;
