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

export default function Pie({data}) {
  return (
    <Card className='border-gray-200 border pb-2'>
      <CardHeader className='text-center font-semibold text-xl'>Users Gender Ratio </CardHeader>
    <PieChart
      series={data}
      width={400}
      height={220}
    />
    </Card>
  );
}