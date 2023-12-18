"use client"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import React, { useEffect } from 'react';
import { TestCard } from './TestCard';
import Link from 'next/Link'
import { GetWalkathonResults } from '@/api';


const TestListCards = (props: any) => {
  const data = props.data;



  return (
    <div>
      <div className="relative  md:flex">
        <ScrollArea className="px-4">
          <div className="grid grid-cols-4 gap-4 mx-5 max-md:grid-cols-1">
            {data.map((item:any, index:any) => (
                            <Link href={`/admin/alleve/analytics/${item.slug}`}>

              <TestCard
                key={index} 
                name={item.name}
                date={item.date}
              />
            </Link>

            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default TestListCards;
