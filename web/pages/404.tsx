import { NextPage } from 'next';
import Navbar from '../components/Navbar';

const Custom404: NextPage = () => {
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>404</h1>
      <Navbar />
      <p className='mb-8 px-4 leading-7'>Ouch, this route does not exists.</p>
    </>
  );
};

export default Custom404;
