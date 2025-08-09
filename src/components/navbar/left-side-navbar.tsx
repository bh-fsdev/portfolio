'use client';
import * as motion from 'motion/react-client';
import Image from 'next/image';

import profileImg from '../../../public/profileImg2.png';
import ThemeToggleButton from '@/components/ui/theme-toggle-button';

function Left() {
  return (
    <div className='relative sm:w-[130px] sm:h-[150px] w-[110px] h-[110px] mob-s:w-[120px] mob-s:h-[120px] mob-m:w-[130px] mob-m:h-[130px] mob-l:w-[140px] mob-l:h-[140px]'>
      <Image src={profileImg} alt='' fill style={{ objectFit: 'cover' }} className='sm:mt-1 sm:ml-1  brightness-95 hover:brightness-75 sm:shadow-[var(--shadow-custom-black)] shadow-[var(--shadow-custom-black-sm)] rounded-md hover:border border-secondary/50 p-1 transition-shadow duration-300' />
      <div className="absolute sm:top-1 sm:left-1 z-30 -top-1 -left-1">
        <ThemeToggleButton variant="gif" url="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXUwdGZ1OW5jdDhpN3R0YzUycTEwbXdqOGVoN2NvOWgybDh0ZzBicyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/txWExeoDIUEtW/giphy.gif"
        />
        {/* <ThemeToggleButton variant="gif" url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhhcnhnazRraXhtaGZ0enpobTRpc3Q4Y3RqNnZpMGpnM2R1cmh1MSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/5KCXDVmBcTL8gpOO5C/giphy.gif" /> */}

      </div>

    </div>
  );
}

export default Left;

