import { ReactNode } from 'react';
import Header from '@/components/shared/header';
import Footer from '@/components/Footer';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='wrapper flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
