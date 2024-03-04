import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='relative z-30 flexBetween max-container py-5 padding-container '>
      <Link href='/'>
        <Image
          src='/hilink-logo.svg'
          alt='logo'
          width={74}
          height={29}
          priority
        />
      </Link>
      <div className='flexCenter gap-12'>
        <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className='regular-16 text-gray-50 flexCenter cursor-pointer transition-all hover:navBold'
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className='lg:flexCenter hidden'>
          <Button
            type='button'
            title='Login'
            icon='/user.svg'
            variant='btn_dark_green'
          />
        </div>
      </div>
      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='inline-block cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
