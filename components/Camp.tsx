import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  people: string;
};

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  people,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[480px] md:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat first:rounded-r-5xl even:rounded-5xl last:rounded-l-5xl 2xl:rounded-5xl`}
    >
      <div className='flex flex-col h-full items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-4'>
            <Image src='/folded-map.svg' alt='map' width={28} height={28} />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white'>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                alt='person'
                key={url}
                width={52}
                height={52}
                className='inline-block h-10 w-10 rounded-full'
              />
            ))}
          </span>
          <p className='bold-16 md:bold-20 text-white'>{people}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className='relative flex flex-col 2xl:max-container py-10 lg:py-20 lg:mb-10 xl:mb-20'>
      <div className='flex h-[340px] lg:h-[400px] xl:h-[640px] hide-scrollbar w-full items-start justify-start gap-8 overflow-x-auto'>
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Langtang Valley Trek'
          subtitle='Rasuwa, Nepal'
          people='30+ joined'
        />
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Everest Base Camp'
          subtitle='Solukhumbu, Nepal'
          people='20+ joined'
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Shey Phoksundo Trek'
          subtitle='Dolpa, Nepal'
          people='10+ joined'
        />
      </div>

      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='relative w-full overflow-hidden bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] rounded-3xl xl:rounded-5xl xl:px-16 xl:py-16'>
          <h2 className='regular-24 md:regular-32 2xl:regular-40 text-white '>
            <strong>Feeling lost</strong> and not knowing the way?
          </h2>
          <p className='regular-14 xl:regular-16 mt-5 text-white text-justify'>
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          <Image
            src='/quote.svg'
            alt='quote'
            width={186}
            height={219}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
