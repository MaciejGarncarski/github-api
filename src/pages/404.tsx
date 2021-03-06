import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import { Seo } from '@/components/Seo';

const NotFoundPage = () => {
  return (
    <div>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <Link href='/'>
              <a className='mt-8 rounded-md bg-blue-800 py-3 px-8 text-4xl text-white transition-transform hover:scale-110'>
                Back To Homepage
              </a>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFoundPage;
