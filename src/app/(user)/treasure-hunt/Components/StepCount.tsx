"use client";
import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress className='rounded-[9.5rem] text-red-500' variant="determinate" {...props} size={200} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          // color="text.secondary"
          color = "black"
          fontSize={35}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function StepCount({progress}:{progress:any}) {
  

  return <CircularProgressWithLabel value={progress} />;
}