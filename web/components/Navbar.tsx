import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: NextPage = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <nav className='mb-8 flex justify-end gap-3 w-full px-4'>
      <Link href='/'>
        <a
          className={
            currentRoute === '/'
              ? 'text-slate-800 no-underline'
              : 'text-gray-500 underline'
          }
        >
          About
        </a>
      </Link>
      <Link href='/timeline'>
        <a
          className={
            currentRoute === '/timeline'
              ? 'text-slate-800 no-underline'
              : 'text-gray-500 underline'
          }
        >
          Timeline
        </a>
      </Link>
      <Link href='/projects'>
        <a
          className={
            currentRoute === '/projects'
              ? 'text-slate-800 no-underline'
              : 'text-gray-500 underline'
          }
        >
          Projects
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
