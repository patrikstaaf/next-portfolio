import sanity from '../../sanity';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getSingleProject } from '../../sanity/queries';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  data: {
    title: string;
    slug: {
      _type: string;
      current: string;
    };
    projectType: string;
    tags: string[];
    projectScreenshot: string;
    projectScreenshotAlt?: string;
    description: string;
    link?: string;
    github?: string;
  };
}

interface Project {
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  projectType: string;
  tags: string[];
  projectScreenshot: string;
  projectScreenshotAlt: string;
  description: string;
  link: string;
  github: string;
}

const SingleProject: NextPage<Props> = ({ data }) => {
  console.log(data);
  const router = useRouter();
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        {data.title}
      </h1>
      <div className='w-full flex justify-between h-full items-center px-4'>
        <div className='flex flex-wrap items-center'>
          <span className='text-gray-500'>{data.projectType}</span>
          <span className='px-2 text-gray-500'>•</span>
          {data.tags.length > 0 &&
            data.tags.map((tag, index) => (
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
          src={data.projectScreenshot}
          alt={data.projectScreenshotAlt}
          className='rounded-lg'
          width={1010}
          height={673}
        />
      </div>
      <p className='mb-4 text-left px-4 leading-7'>{data.description}</p>
      <div className='px-4'>
        {!data.link ? (
          <p className='py-1 leading-7'>Url: Not deployed.</p>
        ) : (
          <p className='py-1 leading-7'>
            Url:{' '}
            <a
              href={data.link}
              className='underline text-blue-600 underline-offset-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.link}
            </a>
          </p>
        )}

        {!data.github ? (
          <p className='py-1 leading-7'>GitHub: Private repo.</p>
        ) : (
          <p className='py-1 leading-7'>
            GitHub:{' '}
            <a
              href={data.github}
              className='underline text-blue-600 underline-offset-4'
              target='_blank'
              rel='noopener noreferrer'
            >
              {data.github}
            </a>
          </p>
        )}
      </div>
    </>
  );
};

export default SingleProject;

export async function getStaticPaths() {
  const query = `*[_type == "project"] { 
    _id,
    slug {
        current
    }
   }`;

  const projects: Project[] = await sanity.fetch(query);

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type=="project" && slug.current == $slug][0] {
    "projectScreenshot": projectImage.asset->url,
    "projectScreenshotAlt": projectImage.alt,
    ...
  }`;

  const { slug } = params as IParams;

  const data: Props = await sanity.fetch(query, {
    slug: slug,
  });

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};
