import './main.scss';

import * as d3 from 'd3';
import {barChart} from './charts/index';

d3.select('#bar-chart')
  .selectAll('div')
  .data([1, 2, 3, 4, 5])
  .enter()
  .append('div')
  .style('height', d => 5 * d + 'px');

// barChart();