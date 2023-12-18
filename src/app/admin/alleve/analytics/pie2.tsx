import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function Pie2({data}) {
  return (
    <Card className='border-gray-200 border '>
      <CardHeader className='text-center font-semibold text-lg'>Contest Participant Ratio </CardHeader>
    <PieChart 
      series={data}
      width={370}
      height={200}
    />
    </Card>
  );
}