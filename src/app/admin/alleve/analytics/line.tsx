import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  import { LineChart } from '@mui/x-charts/LineChart';


  export default function Line({data}) {

    const xLabels = [
        'july',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec',
      
    ];
  return (
   
    <Card className='border-gray-200 border '>
      <CardHeader className='text-center font-semibold text-lg'>User count </CardHeader>
    <LineChart
       width={350}
       height={230}
       series={data}
       xAxis={[{ scaleType: 'point', data: xLabels }]}
     />
     </Card>
  )
}
 