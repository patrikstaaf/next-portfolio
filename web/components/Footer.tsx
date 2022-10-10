import { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className='mt-10 px-4'>
      <small>{new Date().getFullYear()} &copy; Patrik Staaf</small>
      <span className='px-1 text-gray-500'>•</span>
      <small className='text-gray-500'>
        <a
          href='https://github.com/patrikstaaf/next-portfolio'
          className='hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Portfolio repo
        </a>
      </small>
    </footer>
  );
};

export default Footer;
