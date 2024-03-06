import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className='flex flex-1 flex-col w-full items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
        <Image src={icon} alt='icon' width={28} height={28} />
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
      <p className='regular-16 mt-5 bg-white/70 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className='flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='flex max-container padding-container relative w-full justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-16 lg:gap-20'>
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
