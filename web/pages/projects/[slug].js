import sanity from '../../sanity';
import imageUrlBuilder from '@sanity/image-url';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const builder = imageUrlBuilder(sanity);

function urlFor(source) {
  return builder.image(source);
}

export default function SingleProject({ singleProject }) {
  const router = useRouter();
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        {singleProject.title}
      </h1>
      <div className='w-full flex justify-between h-full items-center px-4'>
        <div className='flex flex-wrap items-center'>
          <span className='text-gray-500'>{singleProject.projectType}</span>
          <span className='px-2 text-gray-500'>•</span>
          {singleProject.tags.length > 0 &&
            singleProject.tags.map((tag, index) => (
              <span className=' bg-gray-200 rounded-lg p-1 mx-1' key={index}>
                {tag}
              </span>
            ))}
        </div>
        <div>
          <Link href='/projects' className='text-gray-500 underline'>
            <a className='text-gray-500 underline'>Back</a>
          </Link>
        </div>
      </div>
      <div className='mx-auto my-6 px-4 rounded-lg'>
        <Image
          src={urlFor(singleProject.projectImage).url()}
          alt={singleProject.projectImage.alt}
          className='rounded-lg'
          width={1010}
          height={673}
        />
      </div>
      <p className='mb-4 text-left px-4 leading-7'>
        {singleProject.description}
      </p>
      <div className='px-4'>
        {!singleProject.link ? (
          <p className='py-1 leading-7'>Url: Not deployed.</p>
        ) : (
          <p className='py-1 leading-7'>
            Url:{' '}
            <a
              href={singleProject.link}
              className='underline text-blue-600 underline-offset-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              {singleProject.link}
            </a>
          </p>
        )}

        {!singleProject.github ? (
          <p className='py-1 leading-7'>GitHub: Private repo.</p>
        ) : (
          <p className='py-1 leading-7'>
            GitHub:{' '}
            <a
              href={singleProject.github}
              className='underline text-blue-600 underline-offset-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              {singleProject.github}
            </a>
          </p>
        )}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "project"] { 
    _id,
    slug {
        current
    }
   } `;

  const projects = await sanity.fetch(query);

  const paths = projects.map((project) => ({
    params: {
      slug: project.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const query = `*[_type=="project" && slug.current == $slug][0]`;

  const singleProject = await sanity.fetch(query, {
    slug: params.slug,
  });

  if (!singleProject) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      singleProject,
    },
    revalidate: 10,
  };
}
