'use client'
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [300,700,1243,1777,2621,3221];

const xLabels = [
    'july',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
  
];

export default function Chart1() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: uData, label: 'Users' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}
