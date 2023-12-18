import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/components/NavBar';
import SideBar from '@/components/SideBar';
import { ThemeProvider } from '@/components/theme-provider';
import ReduxProvider from '@/redux/provider';


export const metadata: Metadata = {
  title: 'FitAware Admin',
  description: 'Created Using Next.js 14 and Ant Design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>
              <div className="flex flex-col min-h-screen">
                <NavBar />


                  <div className="mt-[10px]">
                    {children}
                </div>
              </div>
            </main>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}