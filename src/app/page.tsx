import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/login'); 
    }, 2000);

    return () => clearTimeout(timeout); 
  }, []);

  return (
    <div>
      {/* Your splash screen content */}
      <h1>Splash Screen</h1>
      <p>Loading...</p>
    </div>
  );
};

export default Splash;
