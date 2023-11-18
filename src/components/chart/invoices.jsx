import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { CardWrapper } from './styles';
import { Divider } from '@mui/material';

export default function Invoices({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 550 - margin.left - margin.right;
    const height = 250 - margin.top - margin.bottom;
    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.date))
      .rangeRound([0, width])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Create the chart
    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Draw bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => xScale(d.date))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth() - 50)
      .attr('height', (d) => height - yScale(d.value))
      .attr('margin', (d) => xScale.align())
      .attr('fill', '#47B646');

    // Add x-axis
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g').call(d3.axisLeft(yScale));
  }, [data]); // Redraw chart if data changes

  return (
    <CardWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px',
        }}
      >
        <p style={{ margin: '0' }}>Invoices owned by you</p>
        <button
          style={{
            color: '#47B646',
            backgroundColor: '#E8EFFC',
            border: 'none',
            borderRadius: '5px',
            padding: '7px 15px',
            fontWeight: '600',
          }}
        >
          New Sales Invoices
        </button>
      </div>
      <Divider />
      <svg ref={chartRef}></svg>
    </CardWrapper>
  );
}

// export default Invoices;
