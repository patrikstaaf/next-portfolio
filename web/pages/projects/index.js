import Navbar from '../../components/Navbar';
import sanity from '../../sanity';
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <>
      <h1 className='font-extrabold text-4xl mb-8 text-slate-800 px-4'>
        Projects
      </h1>
      <Navbar />
      <p className='mb-8 px-4 leading-7'>
        Below are some of my projects that I hope to soon look back at with
        great disgrace (read improvement). I also look forward to the day when I
        can say &#34;I let my work speak for itself&#34;, but apart from my dry,
        deadpan humor, I do take pride in my work and strive daily to improve,
        step by step (error by error).
      </p>
      <ul>
        {projects &&
          projects.map((project) => (
            <li
              key={project._id}
              className='w-full hover:bg-gray-50 rounded-lg my-2 relative'
            >
              <Link href={`/projects/${project.slug.current}`}>
                <div className='flex justify-around p-4 cursor-pointer'>
                  <div>
                    <span className='mr-2 font-semibold'>{project.title}</span>
                    <span className='text-sm text-gray-500'>
                      {project.explanation}
                    </span>
                  </div>
                  <div className='border-b-2 border-dotted border-[#e2e2e2] grow mb-2 mx-4'></div>
                  <div>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type=="project"] | order(order asc)`;

  const projects = await sanity.fetch(query);

  return {
    props: {
      projects,
    },
    // revalidate: 10,
  };
}
