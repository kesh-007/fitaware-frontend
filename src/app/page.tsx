"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/login'); 
    }, 2000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div className='h-screen flex justify-center items-center'>
      <h1>FitAware</h1>
      <p>Loading...</p>
    </div>
  );
};

export default Page;
