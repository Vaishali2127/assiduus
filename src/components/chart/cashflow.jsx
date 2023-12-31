import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { CardWrapper } from './styles';
import { Divider } from '@mui/material';

const CashFlow = ({ data }) => {
  const svgRef = useRef();
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 500 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  useEffect(() => {
    // Set up the SVG with the proper dimensions
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Define the scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Draw the bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.name))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth() - 50)
      .attr('height', (d) => height - yScale(d.value))
      // .attr('width', x1.rangeBand() - 2)
      .attr('fill', '#4caf50'); // Set the color of the bars

    // Add the x-axis labels
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));
  }, [
    data,
    height,
    margin.bottom,
    margin.left,
    margin.right,
    margin.top,
    width,
  ]);

  return (
    <CardWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <p style={{ margin: '0' }}>Total cash flow</p>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <button
              style={{
                // color: '#ffffff00',
                backgroundColor: '#218f1f',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                fontWeight: '600',
                margin: '7px',
              }}
            ></button>
            In
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              style={{
                // color: '#ffffff00',
                backgroundColor: '#47B646',
                border: 'none',
                borderRadius: '5px',
                padding: '10px',
                fontWeight: '600',
                margin: '7px',
              }}
            ></button>
            Out
          </div>
        </div>
      </div>
      <Divider />
      <svg ref={svgRef}></svg>
    </CardWrapper>
  );
};

export default CashFlow;
