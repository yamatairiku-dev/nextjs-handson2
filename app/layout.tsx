import { Suspense } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <header className="fixed flex h-16 w-full bg-transparent px-6 backdrop-blur-md">
          <div className="my-auto h-auto text-5xl font-bold tracking-tighter">
            Search Image
          </div>
        </header>
        <main className="min-h-screen bg-gray-950 pb-8 pt-20">
          <Suspense fallback={'loading...'}>
            {children}
          </Suspense>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
