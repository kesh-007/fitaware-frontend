import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { ThemeProvider } from '@/components/theme-provider';
import ReduxProvider from '@/redux/provider';
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FitAware',
  description: 'FitAware app aims to provide fitness via games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <Toaster/>
    {children}

            </main>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
