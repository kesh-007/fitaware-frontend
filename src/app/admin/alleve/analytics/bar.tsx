"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function BarChartComponent() {
  const data = [
    { name: 'Participant 1', distance: 120 },
    { name: 'Participant 2', distance: 210 },
    { name: 'Participant 3', distance: 170 },
    { name: 'Participant 4', distance: 280 },
    // Add more dummy data as needed
  ];

  return (
    <BarChart width={730} height={250} data={data} className='max-md:hidden'>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="distance" fill="#8884d8" />
    </BarChart>
  );
}
