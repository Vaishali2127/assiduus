import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Account = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return; // Check if data is empty

    const line = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.value))
      .curve(d3.curveMonotoneX);

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear svg content before redrawing

    const width = 400;
    const height = 150;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([innerHeight, 0]);

    const lineGenerator = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX); // This will make the line smooth

    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

    g.append('g').call(d3.axisLeft(yScale)).attr('transform', `translate(0,0)`);

    g.append('g')
      .call(d3.axisBottom(xScale))
      .attr('transform', `translate(0,${innerHeight})`);
  }, [data]); // Redraw chart if data changes

  return <svg ref={svgRef} width={400} height={150}></svg>;
};

export default Account;
