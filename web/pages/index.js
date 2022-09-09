import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        Patrik Staaf
      </h1>
      <Navbar />
      <p className='py-2 leading-7 px-4'>
        Hey, I&apos;m a web developer student at{' '}
        <a
          href='https://yrgo.se'
          className='font-semibold underline underline-offset-4 decoration-blue-600'
          target='_blank'
          rel='noopener noreferrer'
        >
          Yrgo
        </a>
        .
      </p>
      <p className='py-2 leading-7 px-4'>
        My initial thoughts were to create a &#34;cool&#34; interactive
        portfolio, I'm a web developer student after all. However, after some
        late-night reflection, I concluded that if any site should{' '}
        <span className='font-semibold'>reflect me</span> it should obviously be
        my portfolio.
      </p>
      <p className='py-2 leading-7 px-4'>
        So this is it. I consider myself a simple man who enjoys clean front-end
        experiences, yet function {'>'} esthetics and a straightforward design,
        i.e. no fuss/distractions.
      </p>
      <hr className='my-10 mx-auto w-full px-4' />
      <p className='py-2 leading-7 px-4'>
        GitHub{' '}
        <a
          href='https://github.com/patrikstaaf'
          className='underline text-blue-600 underline-offset-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          @patrikstaaf
        </a>
      </p>
      <p className='py-2 leading-7 px-4'>
        LinkedIn{' '}
        <a
          href='https://linkedin.com/in/patrikstaaf'
          className='underline text-blue-600 underline-offset-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          @patrikstaaf
        </a>
      </p>
      <p className='py-2 leading-7 px-4'>
        Email{' '}
        <a
          href='mailto:staaf.patrik@gmail.com'
          className='underline text-blue-600 underline-offset-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          staaf.patrik@gmail.com
        </a>
      </p>
    </>
  );
}
