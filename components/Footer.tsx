import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image src='hilink-logo.svg' alt='logo' width={74} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30 cursor-pointer'>
                  {columns.links.map((link) => (
                    <span key={link}>{link}</span>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <span key={link.label} className='flex gap-4 md:flex-col'>
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='font-[600] whitespace-nowrap text-blue-70 cursor-pointer'>
                      {link.value}
                    </p>
                  </span>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30 cursor-pointer'>
                  {SOCIALS.links.map((link) => (
                    <span key={link}>
                      <Image src={link} alt='logo' width={24} height={24} />
                    </span>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20' />
        <p className='regular-14 w-full text-center text-gray-30'>
          &copy; 2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
