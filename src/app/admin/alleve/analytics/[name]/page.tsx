"use client"
import React, { useState,useEffect } from 'react';
import BarChartComponent from '../bar';
import SelectFields from '../../Components/SelectFields';
import TestingModel from '../TestingModel';
import DataTable from '../../Components/Table';
import { GetWalkathonResults } from '@/api';

const Page = ({ params }: { params: any }) => {
  console.log(params.name);
  const cvalue = params.name
  const [data,SetData] = useState([])

  const [filter, setFilter] = useState('');

  function onChangeValue(name: string) {
    setFilter(name);
  }
  useEffect(()=>{

    GetWalkathonResults(cvalue).then((data:any)=>{
      console.log(data,'ada ommlaa')
      SetData(data)
    })
    

  },[])

  return (
    <div>
      <div className='flex justify-between p-5'>
        <div>{params.name}</div>
        <div>
          <SelectFields onChangeValue={onChangeValue} />
        </div>
      </div>
      <hr />

      <div className='min-h-[90vh] flex justify-center items-center'>
        {filter === 'graphs' && 
        <div className='flex gap-3 p-4  '>
        <BarChartComponent />

        </div>
        }
        {filter === 'testing_model' && <TestingModel />}
        {filter==='data_table' && <DataTable data={data}/>}
      </div>
    </div>
  );
};

export default Page;
