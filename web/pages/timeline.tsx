import Timeline from '../components/Timeline';
import Navbar from '../components/Navbar';
import { NextPage } from 'next';

const TimelinePage: NextPage = () => {
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        Patrik Staaf
      </h1>
      <Navbar />
      <p className='px-4 py-2 leading-7'>
        My intention with this portfolio is not merely to display projects, but
        also some personal info to get a quick grasp of the{' '}
        <span className='font-semibold'>person behind the keyboard</span>. Sure,
        some employers might stay away from contact due to various formulations
        or characteristics, then I most likely would not be a good fit for that
        company culture anyhow, and we both save each other some time.
      </p>
      <Timeline />
    </>
  );
};

export default TimelinePage;
