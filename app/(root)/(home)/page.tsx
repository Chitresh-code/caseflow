'use client'

import { useState, useEffect } from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const [indianTime, setIndianTime] = useState('');
  const [indianDate, setIndianDate] = useState('');

  useEffect(() => {
    const indianTimeZone = 'en-IN';
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit' as const, minute: '2-digit' as const };

    const now = new Date();
    const time = now.toLocaleTimeString(indianTimeZone, options);
    const date = now.toLocaleDateString(indianTimeZone, { dateStyle: 'full' });

    setIndianTime(time);
    setIndianDate(date);
  }, []);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{indianTime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{indianDate}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
