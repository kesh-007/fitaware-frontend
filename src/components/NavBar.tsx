'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Toggle from './Toggle';
import   {HeaderComponent}  from './NavigationMenu';

const NavBar = () => {
  const { setTheme } = useTheme();

  return (
    <div>
    <div className="  shadow w-full   ml-0 h-[60px]">
      <div className='flex justify-between mx-1 p-1'> 
      <div>
        <p className='text-2xl p-2'>fitaware admin</p>
      </div>
      <HeaderComponent/>


      <Toggle/>
      </div>
      <hr className='mt-2 bg-white'/>

    </div>
    
    </div>
  );
};

export default NavBar;
